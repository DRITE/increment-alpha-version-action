const core = require('@actions/core');
const github = require('@actions/github');

try {
    const distTags = core.getInput('dist-tags');
    console.log(`Hello ${nameToGreet}!`);
    let resultVersion = 'here will be result'
    core.setOutput("result-version", resultVersion);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
