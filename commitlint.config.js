export default {
  // 继承常规提交规范
  extends: ["@commitlint/config-conventional"],

  // 自定义规则
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2, // 级别：2=错误，1=警告，0=关闭
      "always",
      [
        "feat", // 新功能 feature
        "fix", // 修复 bug
        "docs", // 文档注释
        "style", // 代码格式（不影响代码运行的变动）
        "refactor", // 重构（既不增加新功能，也不是修复bug）
        "perf", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退
        "build" // 打包
      ]
    ],
    // subject 大小写不做校验
    "subject-case": [0],
    // type 必须小写
    "type-case": [2, "always", "lower-case"],
    // type 不能为空
    "type-empty": [2, "never"],
    // scope 不能为空（可根据项目需求调整）
    "scope-empty": [0],
    // scope 大小写不做校验
    "scope-case": [0],
    // subject 不能为空
    "subject-empty": [2, "never"],
    // subject 以.结尾
    "subject-full-stop": [0, "never"],
    // header 最大长度
    "header-max-length": [2, "always", 100]
  }
};
