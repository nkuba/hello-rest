// Discover Environment Variables
exports.getEnvVars = function () {
    var varsMap = {}

    varsMap["ENV_VAR1"] = process.env.ENV_VAR1
    varsMap["ENV_VAR2"] = process.env.ENV_VAR2

    console.log("Discovered environment variables: " + JSON.stringify(varsMap))

    return varsMap
}