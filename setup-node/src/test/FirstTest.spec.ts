import { User } from "../models/User";

test("it should be ok", () => { 
  const user = new User;

  user.name = "Samuel";
  expect(user.name).toEqual("Samuel");
});
