const espree = require("espree");

module.exports.scan_put_label_or_put_event = function (code) {
  const tokens = espree.tokenize(code || "", { ecmaVersion: 2020 });

  const args = [];

  tokens.forEach((t, i) => {
    if (
      t.type === "Identifier" &&
      (t.value === "put_label" || t.value === "put_event")
    ) {
      const left_parentheses_pos = i + 1;
      let right_parentheses_pos = left_parentheses_pos + 1;

      let other_left_parentheses = 0;
      for (let _i = i + 2; _i < tokens.length; _i++) {
        if (tokens[_i].type === "Punctuator" && tokens[_i].value === "(") {
          other_left_parentheses++;
          continue;
        }

        if (tokens[_i].type === "Punctuator" && tokens[_i].value === ")") {
          if (other_left_parentheses === 0) {
            right_parentheses_pos = _i;
            break;
          } else {
            other_left_parentheses--;
            continue;
          }
        }
      }

      args.push(
        "pub_label" +
          tokens
            .slice(left_parentheses_pos, right_parentheses_pos + 1)
            .map((t) => t.value)
            .join("") +
          ";"
      );
    }
  });

  return args.map((arg_code) => {
    const ast = espree.parse(arg_code || "put_label();", { ecmaVersion: 2020 });

    return {
      label_name:
        arg_code.slice(
          ast?.body[0]?.expression?.arguments?.[0]?.start || 0,
          ast?.body[0]?.expression?.arguments?.[0]?.end || 0
        ) || "",
      event_meta:
        arg_code.slice(
          ast?.body[0]?.expression?.arguments?.[1]?.start || 0,
          ast?.body[0]?.expression?.arguments?.[1]?.end || 0
        ) || "",
      event_source:
        arg_code.slice(
          ast?.body[0]?.expression?.arguments?.[2]?.start || 0,
          ast?.body[0]?.expression?.arguments?.[2]?.end || 0
        ) || "",
      event_target:
        arg_code.slice(
          ast?.body[0]?.expression?.arguments?.[3]?.start || 0,
          ast?.body[0]?.expression?.arguments?.[3]?.end || 0
        ) || "",
    };
  });
};
