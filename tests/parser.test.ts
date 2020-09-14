import path from "path";
import parser from "@/api-parser";

const jsonFilePath = path.resolve(__dirname, "json-test-files/base.json");

test("JSON file is parsed", async () => {
  const file = await parser(jsonFilePath);
  expect(file.info.title).toBe("JSON test file");
});

const ymlFilePath = path.resolve(__dirname, "yml-test-files/base.yml");

test("YML file is parsed", async () => {
  const file = await parser(ymlFilePath);
  expect(file.info.title).toBe("YML test file");
});
