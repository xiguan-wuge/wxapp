global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d53d50b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(12);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d53d50b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0d53d50b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d53d50b", Component.options)
  } else {
    hotAPI.reload("data-v-0d53d50b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [{ 'text': '吃饭', done: true }]
    };
  },

  components: {},
  computed: {
    todoNum: function todoNum() {
      return this.todos.filter(function (todo) {
        return !todo.done;
      }).length;
    }
  },
  methods: {
    addTodo: function addTodo() {
      if (!this.mytodo) {
        return;
      }
      this.todos.push({ text: this.mytodo, done: false });
      this.mytodo = '';
    },
    toggle: function toggle(i) {
      // 状态的切换？
      // vue 只要改了数据， 只接会变界面
      // 状态 done true|false
      this.todos[i].done = !this.todos[i].done;
    },
    clearTodo: function clearTodo() {
      this.todos = [];
    }
  },
  created: function created() {}
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mpvue-demo"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.mytodo))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.mytodo),
      expression: "mytodo"
    }],
    attrs: {
      "type": "text",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.mytodo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.mytodo = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addTodo
    }
  }, [_vm._v("加一条")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.clearTodo
    }
  }, [_vm._v("清空")]), _vm._v(" "), _c('ul', {
    staticClass: "todos"
  }, [_vm._l((_vm.todos), function(todo, i) {
    return _c('li', {
      directives: [{
        name: "key",
        rawName: "v-key",
        value: (i),
        expression: "i"
      }],
      class: {
        'done': todo.done
      },
      attrs: {
        "eventid": '3-' + i
      },
      on: {
        "click": function($event) {
          _vm.toggle(i)
        }
      }
    }, [_vm._v(_vm._s(todo.text))])
  }), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.todoNum) + "/" + _vm._s(_vm.todos.length))])], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0d53d50b", esExports)
  }
}

/***/ })
],[8]);
//# sourceMappingURL=main.js.map