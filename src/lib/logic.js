const { scan_put_label_or_put_event } = require("../common/tokenize_ast.js");

module.exports.FetchPotentialLabellingsFromLogic = function (logic) {
  if (
    logic.logic_body === undefined ||
    logic.logic_body.ok === undefined ||
    logic.logic_body.err === undefined
  )
    throw "invalid logic body";

  const ok_labellings = scan_put_label_or_put_event(logic.logic_body.ok || "");
  const err_labellings = scan_put_label_or_put_event(
    logic.logic_body.err || ""
  );

  return {
    ...logic,
    potential_labellings: {
      ok: ok_labellings,
      err: err_labellings,
    },
  };
};
