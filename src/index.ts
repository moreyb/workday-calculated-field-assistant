declare const process: any;
declare const require: (id: string) => any;

const readline = require("readline");
import { recommendCalculatedField } from "./agent";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your requirement: ", (requirement: string) => {
  const result = recommendCalculatedField(requirement);

  console.log("\nRecommendation");
  console.log(result);

  rl.close();
});
``