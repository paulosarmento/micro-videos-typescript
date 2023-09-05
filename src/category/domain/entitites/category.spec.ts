import { Category, CategoryProperties } from "./category";
import { omit } from "lodash";
import { validate as uuidValidate } from "uuid";

describe("Category Unit Tests", () => {
  test("constructor category", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "some description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "some description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });

    // expect(category.name).toBe("Movie");
    // expect(category.description).toBe("some description");
    // expect(category.is_active).toBeTruthy();
    // expect(category.created_at).toBe(created_at);
  });

  test("id field", () => {
    type CategoryData = { props: CategoryProperties; id?: string };
    const data: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: "213a8a6e-47c7-41b2-993e-4d3bd5aa45e8" },
    ];

    data.forEach((i) => {
      const category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(uuidValidate(category.id)).toBeTruthy();
    });

    // let category = new Category({
    //   name: "Movie",
    // });
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    // category = new Category(
    //   {
    //     name: "Movie",
    //   },
    //   null
    // );
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    // category = new Category(
    //   {
    //     name: "Movie",
    //   },
    //   undefined
    // );
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();
    // category = new Category(
    //   {
    //     name: "Movie",
    //   },
    //   "213a8a6e-47c7-41b2-993e-4d3bd5aa45e8"
    // );
    // expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();
  });

  test("Getter of name field", () => {
    const category = new Category({
      name: "Movie",
    });
    expect(category.name).toBe("Movie");
  });

  test("Getter and setter of description field", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Movie",
      description: "some description",
    });
    expect(category.description).toBe("some description");

    category = new Category({
      name: "Movie",
    });
    category["description"] = "other description";
    expect(category.description).toBe("other description");

    category["description"] = undefined;
    expect(category.description).toBeNull();

    category["description"] = null;
    expect(category.description).toBeNull();
  });

  test("getter and setter of is_active prop ", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: false,
    });
    expect(category.is_active).toBeFalsy();
  });
  test("getter of created_at prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.created_at).toBe(created_at);
  });
});
