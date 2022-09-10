/*
  Auth routes -> /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { emailExists } = require("../helpers/databaseValidators");
const validateFields = require("../middlewares/validateFields");
const validateJWT = require("../middlewares/validateJWT");
const router = Router();

const registerValidator = [
  check("name", "이름을 입력해주세요...").not().isEmpty(),
  check("name", "이름은 최소 1글자, 최대 32글자를 입력해주세ㅔ요...").isLength({
    max: 32,
  }),
  check("email", "이메일 형식을 지켜주세요...").isEmail(),
  check(
    "password",
    "비밀번호는 8 ~ 32글자, 최소 숫자 1개, 기호 1개, 소문자 1개, 대문자 1개를 입력해주세요..."
  ).isStrongPassword(),
  check("password", "비밀번호는 8 ~ 32글자를 지켜주세요...").isLength({
    max: 3,
  }),
  validateFields,
  emailExists,
];

router.post("/register", registerValidator, createUser);

module.exports = router;
