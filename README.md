# fst-loc-tools-utils

```sh
yarn add @fstnetwork/fst-loc-tools-utils
```

## DataProcess

```javascript
const { DataProcess } = require("@fstnetwork/fst-loc-tools-utils");
const { FetchPotentialLabellingsFromDataProcess } = DataProcess;
```

### FetchPotentialLabellingsFromDataProcess(data_process_obj)

```javascript
FetchPotentialLabellingsFromDataProcess({
  data_process_name: "DataProcessAAA",
  data_input_body: {
    insurance_premium: "",
    sales_id: "",
    commission_rule_type: "",
    vehicle_category: "",
    campaign: "",
    group: "",
    brand_name: "",
    sales_channel: "",
    commission_group_name: "",
    geography_selection: "",
    coverages: "",
  },
  logics: [
    {
      logic_name: "logic_AAA",
      logic_body: {
        ok: 'async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body["insurance_premium"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n',
        err: 'async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    "ERR",\n    "",\n    "DataProcessAAA",\n    "logic_AAA"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n',
      },
      activated: true,
      _id: "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
      _rev: "1-f024a5f2eb9272b919ac340d43d0b47b",
    },
    {
      logic_name: "logic_BBB",
      logic_body: {
        ok: 'async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body["insurance_premium"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n',
        err: 'async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    "ERR",\n    "",\n    "DataProcessAAA",\n    "logic_BBB"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n',
      },
      activated: true,
      _id: "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
      _rev: "1-f024a5f2eb9272b919ac340d43d0b47b",
    },
  ],
});

// =>
[
  {
    logic_name: "logic_AAA",
    logic_body: {
      ok: 'async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body["insurance_premium"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n',
      err: 'async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    "ERR",\n    "",\n    "DataProcessAAA",\n    "logic_AAA"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n',
    },
    activated: true,
    _id: "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
    _rev: "1-f024a5f2eb9272b919ac340d43d0b47b",
    potential_labellings: {
      ok: [],
      err: [
        {
          label_name: '"ERR"',
          event_meta: '""',
          event_source: '"DataProcessAAA"',
          event_target: '"logic_AAA"',
        },
      ],
    },
  },
  {
    logic_name: "logic_BBB",
    logic_body: {
      ok: 'async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body["insurance_premium"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n',
      err: 'async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    "ERR",\n    "",\n    "DataProcessAAA",\n    "logic_BBB"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n',
    },
    activated: true,
    _id: "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
    _rev: "1-f024a5f2eb9272b919ac340d43d0b47b",
    potential_labellings: {
      ok: [],
      err: [
        {
          label_name: '"ERR"',
          event_meta: '""',
          event_source: '"DataProcessAAA"',
          event_target: '"logic_BBB"',
        },
      ],
    },
  },
];
```

## Logic

```javascript
const { Logic } = require("@fstnetwork/fst-loc-tools-utils");
const { FetchPotentialLabellingsFromLogic } = Logic;
```

### FetchPotentialLabellingsFromLogic(logic)

```javascript
FetchPotentialLabellingsFromLogic({
  logic_name: "logic_AAA",
  logic_body: {
    ok: 'async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body["insurance_premium"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n',
    err: 'async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    "ERR",\n    "",\n    "DataProcessAAA",\n    "logic_AAA"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n',
  },
  activated: true,
  _id: "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
  _rev: "1-f024a5f2eb9272b919ac340d43d0b47b",
});

// =>
{
  "logic_name": "logic_AAA",
  "logic_body": {
    "ok": "async function ok(ctx) {\n  if (ctx.tmp === undefined) {\n    ctx.tmp = {};\n  }\n  if (ctx.tmp.cond_ok !== false) {\n    if (req.body[\"insurance_premium\"] > 0) {\n      ctx.tmp.cond_ok = true;\n    } else {\n      ctx.tmp.cond_ok = false;\n    }\n  }\n  return await ctx;\n}\n\nok(ctx);\n",
    "err": "async function err(ctx) {\n  ctx.tmp.cond_ok = false;\n  put_event(\n    \"ERR\",\n    \"\",\n    \"DataProcessAAA\",\n    \"logic_AAA\"\n  );\n  return await ctx;\n}\n\nerr(ctx);\n"
  },
  "activated": true,
  "_id": "mMuaC0V4ADOBewAfoa13Iw3q6EUrViyY6EkrUG8x77L",
  "_rev": "1-f024a5f2eb9272b919ac340d43d0b47b",
  "potential_labellings": {
    "ok": [],
    "err": [
      {
        "label_name": "\"ERR\"",
        "event_meta": "\"\"",
        "event_source": "\"DataProcessAAA\"",
        "event_target": "\"logic_AAA\""
      }
    ]
  }
}
```
