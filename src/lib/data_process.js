const { scan_put_label_or_put_event } = require("../common/tokenize_ast.js");

module.exports.FetchPotentialLabellingsFromDataProcess = function (
  data_process
) {
  if (!Array.isArray(data_process.logics) || data_process.logics.length === 0)
    throw "no logics array in data_process";

  return data_process.logics.map((logic) => {
    const ok_labellings = scan_put_label_or_put_event(
      logic.logic_body.ok || ""
    );
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
  });
};
