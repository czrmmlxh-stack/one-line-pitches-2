// Writes the one-line pitch to /output/entry.txt for the make.fun bounty entry.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "You've got the idea and I've got the builder: let an AI agent turn your first app idea into something real on make.fun, free to try and yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
