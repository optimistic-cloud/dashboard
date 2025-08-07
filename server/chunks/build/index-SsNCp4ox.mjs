import { useSSRContext, defineComponent, createElementBlock, ref, provide, unref, mergeProps, computed, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, createSlots, withAsyncContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport } from 'vue/server-renderer';
import __nuxt_component_0 from './Icon-Bnjr7SEb.mjs';
import { b as useNuxtApp, c as createError, u as useFetch, a as useIntervalFn } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-CUokCb_p.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'events';
import 'https';
import 'http';
import 'net';
import 'tls';
import 'crypto';
import 'stream';
import 'url';
import 'zlib';
import 'buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'node:url';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Placeholder",
  __ssrInlineRender: true,
  props: {
    animate: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4 flex gap-4" }, _attrs))}><div class="flex-shrink-0 flex"><div class="${ssrRenderClass([{ "animate-pulse": props.animate }, "self-center w-16 h-16 overflow-hidden rounded-2xl border border-black/5"])}"><div class="bg-fg/5 dark:bg-fg/10 h-full w-full"></div></div></div><div><h3 class="${ssrRenderClass([{ "animate-pulse": props.animate }, "text-lg mt-1"])}"><span class="inline-block min-h-[1em] w-[110px] flex-auto cursor-wait bg-fg/5 dark:bg-fg/10 align-middle opacity-50 rounded"></span></h3><p class="${ssrRenderClass([{ "animate-pulse": props.animate }, "text-sm text-black/50"])}"><span class="inline-block min-h-[1em] w-[160px] flex-auto cursor-wait bg-fg/5 dark:bg-fg/10 align-middle opacity-50 rounded"></span></p></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/Placeholder.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const iconClasses = "block h-full w-full";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    url: {},
    name: {},
    wrap: { type: Boolean },
    background: {},
    color: {}
  },
  setup(__props) {
    const props = __props;
    const wrapClasses = computed(() => ({
      "bg-fg/5 dark:bg-fg/10": (props == null ? void 0 : props.wrap) && !(props == null ? void 0 : props.background),
      "p-2": props == null ? void 0 : props.wrap,
      [iconClasses]: true,
      "border border-fg/10 dark:border-fg/15 rounded-2xl": true
    }));
    const wrapStyles = computed(() => ({
      background: props == null ? void 0 : props.background,
      color: props == null ? void 0 : props.color
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(wrapClasses),
        style: unref(wrapStyles)
      }, _attrs))}>`);
      if (props == null ? void 0 : props.name) {
        _push(ssrRenderComponent(_component_Icon, {
          name: props.name,
          class: iconClasses
        }, null, _parent));
      } else if (props == null ? void 0 : props.url) {
        _push(`<img${ssrRenderAttr("src", props.url)} alt="" class="${ssrRenderClass(iconClasses)}">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/base/Icon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Status",
  __ssrInlineRender: true,
  props: {
    ping: { default: () => ({
      status: void 0,
      animation: true,
      time: 0
    }) }
  },
  setup(__props) {
    const props = __props;
    const colorClasses = computed(() => [
      { "bg-green-400": props.ping.status },
      { "bg-red-400": props.ping.status === false },
      { "bg-neutral-400": props.ping.status === void 0 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["relative inline-flex z-1 h-2.5 w-2.5 rounded-full bg-green-400", unref(colorClasses)]
      }, _attrs))}>`);
      if (!_ctx.ping || _ctx.ping.animation !== false) {
        _push(`<span class="${ssrRenderClass([unref(colorClasses), "absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"])}"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/base/Status.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  __ssrInlineRender: true,
  props: {
    tag: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => typeof props.tag === "string" ? { name: props.tag, color: "blue" } : props.tag);
    const tagClasses = computed(() => [
      `bg-${tag.value.color}-100`,
      `text-${tag.value.color}-800`,
      "text-xs",
      "font-medium",
      "me-2",
      "px-2.5",
      "py-0.5",
      "rounded",
      `dark:bg-${tag.value.color}-900`,
      `dark:text-${tag.value.color}-300`
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: unref(tagClasses) }, _attrs))}>${ssrInterpolate(unref(tag).name)}</span>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/base/Tag.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function isUrl(ur) {
  try {
    const _url = new URL(ur);
    return true;
  } catch (_) {
    console.error("Invalid URL:", _);
  }
  return false;
}
function useServiceData(service, options) {
  const immediate = (options == null ? void 0 : options.immediate) || false;
  const updateInterval = ((options == null ? void 0 : options.updateInterval) || 60) * 1e3;
  const type = service.type || "base";
  const { data, pending, status, refresh, execute } = useFetch(`/api/services/${type}`, {
    immediate,
    query: { id: service.id },
    timeout: 15e3
  }, "$P6qENdZmAV");
  const { pause, resume } = useIntervalFn(refresh, updateInterval, { immediate });
  return {
    data,
    pending,
    status,
    execute,
    pauseUpdate: pause,
    resumeUpdate: resume
  };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    id: {},
    type: {},
    title: {},
    description: {},
    link: {},
    target: {},
    icon: {},
    status: {},
    tags: {},
    options: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { $settings } = useNuxtApp();
    const isLink = computed(() => isUrl(props.link || ""));
    const target = computed(() => props.target || $settings.behaviour.target);
    const immediate = computed(() => {
      var _a;
      return ((_a = props.status) == null ? void 0 : _a.enabled) || !!props.type || false;
    });
    const { data, pauseUpdate } = useServiceData(props, {
      immediate: immediate.value
    });
    const loadingOverlay = computed(() => {
      if (props.type && !data.value) {
        return true;
      }
      return false;
    });
    __expose({ data });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServicePlaceholder = _sfc_main$a;
      const _component_ServiceBaseIcon = _sfc_main$9;
      const _component_ServiceBaseStatus = _sfc_main$8;
      const _component_ServiceBaseTag = _sfc_main$7;
      if (unref(loadingOverlay)) {
        _push(ssrRenderComponent(_component_ServicePlaceholder, _attrs, null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(isLink) ? "a" : "div"), mergeProps({
          href: _ctx.link,
          target: unref(target),
          class: "p-4 flex gap-4 hover:bg-fg/5 dark:hover:bg-fg/9 rounded-2xl transition-all"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex-shrink-0 flex"${_scopeId}><div class="self-center w-16 h-16 overflow-hidden"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "icon", { service: unref(data) }, () => {
                if (_ctx.icon) {
                  _push2(ssrRenderComponent(_component_ServiceBaseIcon, _ctx.icon, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div></div><div${_scopeId}><h3 class="text-lg pr-1 font-semibold line-clamp-1 flex gap-2 items-center"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", { service: unref(data) }, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              if (_ctx.status && _ctx.status.enabled) {
                ssrRenderSlot(_ctx.$slots, "status", { data: unref(data) }, () => {
                  var _a, _b;
                  _push2(ssrRenderComponent(_component_ServiceBaseStatus, {
                    ping: { ...(_a = unref(data)) == null ? void 0 : _a.ping, animation: (_b = _ctx.status) == null ? void 0 : _b.animation }
                  }, null, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</h3><p class="text-sm text-fg-dimmed line-clamp-1"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", { service: unref(data) }, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</p>`);
              if (_ctx.tags.length) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.tags, (tag, key) => {
                  _push2(ssrRenderComponent(_component_ServiceBaseTag, {
                    key,
                    tag
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex-shrink-0 flex" }, [
                  createVNode("div", { class: "self-center w-16 h-16 overflow-hidden" }, [
                    renderSlot(_ctx.$slots, "icon", { service: unref(data) }, () => [
                      _ctx.icon ? (openBlock(), createBlock(_component_ServiceBaseIcon, mergeProps({ key: 0 }, _ctx.icon), null, 16)) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("h3", { class: "text-lg pr-1 font-semibold line-clamp-1 flex gap-2 items-center" }, [
                    renderSlot(_ctx.$slots, "title", { service: unref(data) }, () => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _ctx.status && _ctx.status.enabled ? renderSlot(_ctx.$slots, "status", {
                      key: 0,
                      data: unref(data)
                    }, () => {
                      var _a, _b;
                      return [
                        createVNode(_component_ServiceBaseStatus, {
                          ping: { ...(_a = unref(data)) == null ? void 0 : _a.ping, animation: (_b = _ctx.status) == null ? void 0 : _b.animation }
                        }, null, 8, ["ping"])
                      ];
                    }) : createCommentVNode("", true)
                  ]),
                  createVNode("p", { class: "text-sm text-fg-dimmed line-clamp-1" }, [
                    renderSlot(_ctx.$slots, "description", { service: unref(data) }, () => [
                      createTextVNode(toDisplayString(_ctx.description), 1)
                    ])
                  ]),
                  _ctx.tags.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.tags, (tag, key) => {
                    return openBlock(), createBlock(_component_ServiceBaseTag, {
                      key,
                      tag
                    }, null, 8, ["tag"]);
                  }), 128)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 3
        }), _parent);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/base/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "IpApi",
  __ssrInlineRender: true,
  props: {
    options: {},
    id: {},
    type: {},
    title: {},
    description: {},
    link: {},
    target: {},
    icon: {},
    status: {},
    tags: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ServiceBase = _sfc_main$6;
      const _component_ServiceBaseIcon = _sfc_main$9;
      _push(ssrRenderComponent(_component_ServiceBase, mergeProps(props, _attrs), createSlots({
        title: withCtx(({ service }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = service == null ? void 0 : service.data) == null ? void 0 : _a2.ip) || "")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b = service == null ? void 0 : service.data) == null ? void 0 : _b.ip) || ""), 1)
            ];
          }
        }),
        description: withCtx(({ service }, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a2 = service == null ? void 0 : service.data) == null ? void 0 : _a2.place) || "")}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_b = service == null ? void 0 : service.data) == null ? void 0 : _b.place) || ""), 1)
            ];
          }
        }),
        _: 2
      }, [
        ((_a = props.options) == null ? void 0 : _a.flagIcon) !== false ? {
          name: "icon",
          fn: withCtx(({ service }, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(ssrRenderComponent(_component_ServiceBaseIcon, {
                name: `flag:${(_a2 = service == null ? void 0 : service.data) == null ? void 0 : _a2.country}-1x1`
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ServiceBaseIcon, {
                  name: `flag:${(_b = service == null ? void 0 : service.data) == null ? void 0 : _b.country}-1x1`
                }, null, 8, ["name"])
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/IpApi.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "OpenWeatherMap",
  __ssrInlineRender: true,
  props: {
    options: {},
    id: {},
    type: {},
    title: {},
    description: {},
    link: {},
    target: {},
    icon: {},
    status: {},
    tags: {}
  },
  setup(__props) {
    const props = __props;
    const iconProps = computed(() => {
      if (!props.icon) {
        return {};
      }
      const { name: _, ...p } = props.icon;
      return p;
    });
    const metricSymbol = computed(() => {
      var _a;
      if (((_a = props == null ? void 0 : props.options) == null ? void 0 : _a.units) === "imperial") {
        return "\xB0F";
      }
      return "\xB0C";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceBase = _sfc_main$6;
      const _component_ServiceBaseIcon = _sfc_main$9;
      _push(ssrRenderComponent(_component_ServiceBase, mergeProps(props, _attrs), {
        icon: withCtx(({ service }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_ServiceBaseIcon, mergeProps({
              name: `wi:owm-${(_a = service == null ? void 0 : service.data) == null ? void 0 : _a.iconId}`
            }, unref(iconProps)), null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ServiceBaseIcon, mergeProps({
                name: `wi:owm-${(_b = service == null ? void 0 : service.data) == null ? void 0 : _b.iconId}`
              }, unref(iconProps)), null, 16, ["name"])
            ];
          }
        }),
        title: withCtx(({ service }, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`${ssrInterpolate((_a = service.data) == null ? void 0 : _a.temp.toFixed(1))} ${ssrInterpolate(unref(metricSymbol))}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b = service.data) == null ? void 0 : _b.temp.toFixed(1)) + " " + toDisplayString(unref(metricSymbol)), 1)
            ];
          }
        }),
        description: withCtx(({ service }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`${ssrInterpolate(((_a = service.data) == null ? void 0 : _a.place) ? `${(_b = service.data) == null ? void 0 : _b.place},` : "")} ${ssrInterpolate((_c = service.data) == null ? void 0 : _c.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(((_d = service.data) == null ? void 0 : _d.place) ? `${(_e = service.data) == null ? void 0 : _e.place},` : "") + " " + toDisplayString((_f = service.data) == null ? void 0 : _f.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/service/OpenWeatherMap.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_3 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Item",
  __ssrInlineRender: true,
  props: {
    id: {},
    type: {},
    title: {},
    description: {},
    link: {},
    target: {},
    icon: {},
    status: {},
    tags: {},
    options: {},
    secrets: {},
    server: {}
  },
  setup(__props) {
    const props = __props;
    function resolveByTypeComponent(type) {
      if (type === "ip-api") {
        return _sfc_main$5;
      }
      if (type === "openweathermap") {
        return _sfc_main$4;
      }
      return _sfc_main$6;
    }
    props.type ? resolveByTypeComponent(props.type) : _sfc_main$6;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_3;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, { animate: false }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$a, { animate: false })
            ];
          }
        })
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Item.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Group",
  __ssrInlineRender: true,
  props: {
    title: {},
    items: {},
    grid: {}
  },
  setup(__props) {
    const props = __props;
    const gridClasses = computed(() => [
      "grid",
      "grid-cols-1",
      `sm:grid-cols-${props.grid.small}`,
      `md:grid-cols-${props.grid.medium}`,
      `lg:grid-cols-${props.grid.large}`,
      `xl:grid-cols-${props.grid.xlarge}`,
      "gap-1",
      "lg:gap-2",
      "lg:gap-y-4"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Item = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10" }, _attrs))}>`);
      if (_ctx.title) {
        _push(`<h2 class="text-2xl font-light py-2 px-4">${ssrInterpolate(_ctx.title)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(unref(gridClasses))}"><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(_component_Item, mergeProps({ ref_for: true }, item), null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Group.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Update",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/update", "$IISPoeUvCs")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(data) && unref(data).available) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(`<div class="fixed z-20 bottom-[30px] right-[30px] opacity-80 hover:opacity-100 transition-all"><div class="w-[160px] h-[160px] -z-1 rounded-full bg-brand-600 blur-3xl right-0 -bottom-20 absolute"></div><div class="z-1 relative text-end text-fg-dimmed">${ssrInterpolate(_ctx.$t("update.message"))} <strong>${ssrInterpolate(unref(data).version)}</strong><br><a${ssrRenderAttr("href", `https://github.com/hywax/mafl/releases/tag/v${unref(data).version}`)} class="border-b border-dashed" target="_blank">${ssrInterpolate(_ctx.$t("update.visit"))}</a></div></div>`);
        }, "body", false, _parent);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Update.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $services, $settings } = useNuxtApp();
    if ($settings.error) {
      throw createError({
        message: $settings.error
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Group = _sfc_main$2;
      const _component_Update = _sfc_main$1;
      _push(`<!--[--><!--[-->`);
      ssrRenderList(unref($services), (group, key) => {
        _push(ssrRenderComponent(_component_Group, mergeProps({
          key,
          ref_for: true
        }, { ...group, grid: unref($settings).layout.grid }), null, _parent));
      });
      _push(`<!--]-->`);
      if (unref($settings).checkUpdates) {
        _push(ssrRenderComponent(_component_Update, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-SsNCp4ox.mjs.map
