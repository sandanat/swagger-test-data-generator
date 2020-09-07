import parser from "@apidevtools/swagger-parser";
import { OpenAPI } from "openapi-types";

export default async function apiParser(
  filePath: string
): Promise<OpenAPI.Document> {
  return parser.parse(filePath);
}
