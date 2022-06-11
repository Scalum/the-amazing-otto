import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ManifestController } from "../manifest.controller";
import { ManifestService } from "../manifest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    arrivalTime: new Date(),
    createdAt: new Date(),
    departureTime: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  arrivalTime: new Date(),
  createdAt: new Date(),
  departureTime: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Manifest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ManifestService,
          useValue: service,
        },
      ],
      controllers: [ManifestController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /manifests", async () => {
    await request(app.getHttpServer())
      .post("/manifests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arrivalTime: CREATE_RESULT.arrivalTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /manifests", async () => {
    await request(app.getHttpServer())
      .get("/manifests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          arrivalTime: FIND_MANY_RESULT[0].arrivalTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          departureTime: FIND_MANY_RESULT[0].departureTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /manifests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/manifests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /manifests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/manifests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        arrivalTime: FIND_ONE_RESULT.arrivalTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        departureTime: FIND_ONE_RESULT.departureTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
