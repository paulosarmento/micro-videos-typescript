import InvalidUuidError from "../../@seedwork/errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

describe("UniqueEntityId unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const uuid = "6d5c69ad-5ae7-412d-90c4-1e0f42c7af01";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });
  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const vo = new UniqueEntityId();
    expect(vo.id).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
