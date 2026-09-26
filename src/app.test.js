import test from "node:test";
import assert from "node:assert/strict";

import { projects, addProject } from "./data.js";

test("addProject adds a project to the project list", () => {
    projects.length = 0;

    const project = {
        name: "Example Project",
        url: "https://github.com/example/project",
        contributions: 0
    };

    const result = addProject(project);

    assert.deepEqual(result, project);
    assert.equal(projects.length, 1);
    assert.deepEqual(projects[0], project);
});

test("multiple projects can be added", () => {
    projects.length = 0;

    addProject({
        name: "Project One",
        url: "https://github.com/example/one",
        contributions: 2
    });

    addProject({
        name: "Project Two",
        url: "https://github.com/example/two",
        contributions: 5
    });

    assert.equal(projects.length, 2);
    assert.equal(projects[0].contributions, 2);
    assert.equal(projects[1].contributions, 5);
});