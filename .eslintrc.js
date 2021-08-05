module.exports = {
  // JavaScript 语言选项
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  // it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10, // 一行属性 最多有10个属性
        multiline: {
          // 多行属性
          max: 1, // 最多只能有1个
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off', // 禁用一行只能出现一个标签
    'vue/multiline-html-element-content-newline': 'off', //
    'vue/name-property-casing': ['error', 'PascalCase'], // vue name 必须是驼峰式
    'vue/no-v-html': 'off', // 关闭 tempalte中不能出现v-html指令
    'vue/no-use-v-if-with-v-for': 0, // 关闭 v-for中不能使用v-if
    'accessor-pairs': 2, //
    'arrow-spacing': [
      2,
      {
        // 箭头函数前后都要有空格
        before: true,
        after: true
      }
    ]
  }
}
