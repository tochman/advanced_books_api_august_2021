let request, response;

before((done) => {
  request = serverConfig(done);
});

beforeEach(async () => {
  let author = await factory.create("Author");
  await factory.create("Book", { AuthorId: author.id });
});

afterEach(async () => {
  await factory.cleanUp();
});

describe("GET /api/books", () => {
  beforeEach(async () => {
    response = await request.get("/api/books");
  });

  it("is expected to respond with status 200", () => {
    expect(response.status).to.equal(200);
  });

  it("is expected to respond with a list of 1 books", () => {
    expect(response.body["books"].length).to.equal(1);
  });
});
