/* @ds-bundle: {"format":4,"namespace":"EditorialDesignSystem_8f642b","components":[{"name":"FilterPill","sourcePath":"components/core/FilterPill.jsx"},{"name":"Meta","sourcePath":"components/core/Meta.jsx"},{"name":"PillButton","sourcePath":"components/core/PillButton.jsx"},{"name":"Plinth","sourcePath":"components/core/Plinth.jsx"},{"name":"RenderPlaceholder","sourcePath":"components/core/RenderPlaceholder.jsx"},{"name":"Reveal","sourcePath":"components/core/Reveal.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"CaseBlock","sourcePath":"components/patterns/CaseBlock.jsx"},{"name":"CaseShots","sourcePath":"components/patterns/CaseShots.jsx"},{"name":"FeedItem","sourcePath":"components/patterns/FeedItem.jsx"},{"name":"Footer","sourcePath":"components/patterns/Footer.jsx"},{"name":"Header","sourcePath":"components/patterns/Header.jsx"},{"name":"Hero","sourcePath":"components/patterns/Hero.jsx"},{"name":"MetaRow","sourcePath":"components/patterns/MetaRow.jsx"},{"name":"NextCase","sourcePath":"components/patterns/NextCase.jsx"}],"sourceHashes":{"components/core/FilterPill.jsx":"7d644c033536","components/core/Meta.jsx":"0a5aed542ad3","components/core/PillButton.jsx":"976e8039c788","components/core/Plinth.jsx":"1cb1ecf21ed8","components/core/RenderPlaceholder.jsx":"2b432db1ef9f","components/core/Reveal.jsx":"a653a86b01da","components/core/Rule.jsx":"156c4ea77691","components/core/Wordmark.jsx":"5a29e98b2729","components/patterns/CaseBlock.jsx":"0b72e259eb63","components/patterns/CaseShots.jsx":"4c2f51d12348","components/patterns/FeedItem.jsx":"b7ed726b7a2f","components/patterns/Footer.jsx":"8fc657b2a9b4","components/patterns/Header.jsx":"3744317f0eb9","components/patterns/Hero.jsx":"d66324b664b4","components/patterns/MetaRow.jsx":"b67fbc133fc6","components/patterns/NextCase.jsx":"0c94a484051c","ui_kits/portfolio/Screens.jsx":"d382a78626e1","ui_kits/portfolio/data.js":"b6b797f18f8c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EditorialDesignSystem_8f642b = window.EditorialDesignSystem_8f642b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/FilterPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Фильтр по тегу. Активный — контурная пилюля, не заливка. */
function FilterPill({
  children,
  active = false,
  onClick,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    onClick: onClick,
    className: ['pf-pill', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { FilterPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Meta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Мета-подпись 11px капсом. mono=true — идентификаторы (номер, название);
   mono=false — подписи и проза-мелочь. Внутри одного блока не смешивать. */
function Meta({
  children,
  mono = false,
  tone = 'meta',
  as = 'span',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  const tones = {
    meta: '',
    ink: 'pf-meta--ink',
    inactive: 'pf-meta--inactive',
    inverse: 'pf-meta--inverse'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['pf-meta', mono ? 'pf-meta--mono' : '', tones[tone] || '', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Meta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Meta.jsx", error: String((e && e.message) || e) }); }

// components/core/PillButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Единственная кнопка сборника и единственный радиус в системе. */
function PillButton({
  children,
  href = '#',
  inverse = false,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: ['pf-cta', inverse ? 'pf-cta--inverse' : '', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { PillButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PillButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Plinth.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Плита: подложка #F4F4F2 с внутренним отступом 40 (мобильный 16).
   Именно она заставляет пёстрые рендеры читаться как одна система. */
function Plinth({
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pf-plinth', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Plinth });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Plinth.jsx", error: String((e && e.message) || e) }); }

// components/core/RenderPlaceholder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Серая заглушка под будущий рендер с подписанным размером. */
function RenderPlaceholder({
  ratio = '16:10',
  size,
  label,
  className = '',
  style,
  ...rest
}) {
  const [w, h] = ratio.split(':').map(Number);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pf-ph', className].filter(Boolean).join(' '),
    style: {
      aspectRatio: (w || 16) + ' / ' + (h || 10),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, label || 'рендер'), /*#__PURE__*/React.createElement("span", null, size ? size : ratio));
}
Object.assign(__ds_scope, { RenderPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RenderPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/core/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Единственный эффект системы: появление снизу на 16px с прозрачностью,
   600ms, плавное замедление, сдвиг 80ms между соседями. Без привязки к скроллу. */
function Reveal({
  children,
  index = 0,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['pf-reveal', className].filter(Boolean).join(' '),
    style: {
      '--pf-i': index,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Волосяная линия. Заменяет карточку, рамку и разделитель — других границ в системе нет. */
function Rule({
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['pf-rule', className].filter(Boolean).join(' '),
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Слово-знак. Ровно от края до края экрана с учётом боковых полей,
   без искажения букв: моноширинный кегль вычисляется из ширины контейнера. */
function Wordmark({
  text = 'ПОРТФОЛИО',
  ghost = false,
  as = 'div',
  className = '',
  style,
  ...rest
}) {
  const Tag = as;
  const ratio = (text.length * 0.58).toFixed(3);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['pf-wordmark', ghost ? 'pf-wordmark--ghost' : '', className].filter(Boolean).join(' '),
    style: {
      '--wordmark-ratio': ratio,
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CaseBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Блок страницы кейса: слева подпись мелким капсом, справа текст до 64 знаков. */
function CaseBlock({
  label,
  children,
  index = 0,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, _extends({
    index: index,
    as: "section",
    className: ['pf-block', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pf-block__label"
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    mono: true,
    tone: "ink"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "pf-block__body"
  }, typeof children === 'string' ? children.split('\n').filter(Boolean).map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "pf-text",
    style: i ? {
      marginTop: 'var(--space-3)'
    } : undefined
  }, t)) : /*#__PURE__*/React.createElement("p", {
    className: "pf-text"
  }, children)));
}
Object.assign(__ds_scope, { CaseBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CaseBlock.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CaseShots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Рендеры внутри кейса: одна широкая плита 16:10 или пара вертикальных 4:5. */
function CaseShots({
  variant = 'wide',
  shots,
  index = 0,
  className = '',
  style,
  ...rest
}) {
  const items = shots && shots.length ? shots : variant === 'pair' ? [{
    ratio: '4:5',
    size: '640×800',
    label: 'кадр'
  }, {
    ratio: '4:5',
    size: '640×800',
    label: 'кадр'
  }] : [{
    ratio: '16:10',
    size: '1360×850',
    label: 'кадр'
  }];
  const frame = s => s.src ? /*#__PURE__*/React.createElement("img", {
    src: s.src,
    alt: "",
    style: {
      width: '100%',
      display: 'block',
      aspectRatio: s.ratio ? s.ratio.replace(':', ' / ') : undefined,
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.RenderPlaceholder, {
    ratio: s.ratio,
    size: s.size,
    label: s.label
  });
  if (variant === 'pair') {
    return /*#__PURE__*/React.createElement(__ds_scope.Reveal, _extends({
      index: index,
      className: ['pf-shots', className].filter(Boolean).join(' '),
      style: style
    }, rest), items.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Plinth, {
      key: i
    }, frame(s))));
  }
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, _extends({
    index: index,
    className: ['pf-bleed', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Plinth, null, frame(items[0])));
}
Object.assign(__ds_scope, { CaseShots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CaseShots.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Инверсный футер: одна крупная строка моно, контакты, одна пилюля. */
function Footer({
  line,
  contacts = [],
  cta = 'Написать в телеграм',
  ctaHref = '#',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ['pf-footer', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "pf-footer__line"
  }, line), /*#__PURE__*/React.createElement("div", {
    className: "pf-footer__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-footer__contacts"
  }, contacts.map((c, i) => c.href ? /*#__PURE__*/React.createElement("a", {
    key: i,
    href: c.href
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    tone: "inverse"
  }, c.value)) : /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    key: i,
    tone: "inverse",
    as: "div"
  }, c.value))), /*#__PURE__*/React.createElement(__ds_scope.PillButton, {
    inverse: true,
    href: ctaHref
  }, cta)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Footer.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Header.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Липкий хедер: знак слева, фильтры тремя колонками мелким капсом,
   справа счёт проектов. Активный фильтр — контурная пилюля, не заливка. */
function Header({
  mark = 'ПОРТФОЛИО',
  filters = [],
  active,
  onFilter,
  count,
  href = '#',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['pf-header', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "pf-header__mark",
    href: href
  }, mark), filters.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "pf-filters"
  }, filters.map(t => /*#__PURE__*/React.createElement(__ds_scope.FilterPill, {
    key: t,
    className: "pf-pill--plain",
    active: t === active,
    onClick: onFilter ? () => onFilter(t) : undefined
  }, t))), count && /*#__PURE__*/React.createElement("div", {
    className: "pf-header__count"
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, null, count)));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Header.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Первый экран: вертикальные волосяные линии сетки, дисплей в две ступени
   (вторая строка со сдвигом на колонку), внизу слева подпись, справа абзац о студии. */
function Hero({
  lead,
  caption = 'Подборка кейсов',
  wordmark = 'ПОРТФОЛИО',
  second,
  strap,
  media,
  mediaSize = '2880×1040',
  className = '',
  style,
  ...rest
}) {
  const ratio2 = second ? (second.length * 0.58).toFixed(3) : null;
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['pf-hero2', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero2__media",
    style: media ? {
      backgroundImage: 'url(' + media + ')'
    } : undefined
  }, !media && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("span", null, mediaSize))), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    index: 0,
    className: "pf-hero2__display"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    text: wordmark
  })), second && /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    index: 1
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-hero2__line2",
    style: {
      '--wordmark-ratio': ratio2
    }
  }, second)), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    index: 1,
    className: "pf-hero2__strap"
  }, /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    tone: "ink"
  }, caption), strap && /*#__PURE__*/React.createElement(__ds_scope.Meta, null, strap)), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero2__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    className: "pf-hero2__lead",
    index: 3
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-text"
  }, lead))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Hero.jsx", error: String((e && e.message) || e) }); }

// components/patterns/MetaRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Мета-строка — главный повторяющийся элемент: тонкая строка над каждым рендером,
   слева идентификатор моно, справа стек, под ней линия.
   На мобильном переносится в два уровня, а не сжимается. */
function MetaRow({
  number,
  name,
  stack,
  className = '',
  style,
  ...rest
}) {
  const left = [number, name].filter(Boolean).join(' — ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pf-metarow', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    mono: true,
    tone: "ink"
  }, left), stack && /*#__PURE__*/React.createElement(__ds_scope.Meta, null, stack));
}
Object.assign(__ds_scope, { MetaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/MetaRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FeedItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Элемент ленты: мета-строка, плита с обложкой 16:10, заголовок. */
function FeedItem({
  number,
  name,
  stack,
  title,
  href = '#',
  size,
  ratio = '16:10',
  cover,
  index = 0,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, _extends({
    index: index,
    as: "article",
    className: ['pf-item', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement("a", {
    className: "pf-item__link",
    href: href
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaRow, {
    number: number,
    name: name,
    stack: stack
  }), /*#__PURE__*/React.createElement(__ds_scope.Plinth, null, cover || /*#__PURE__*/React.createElement(__ds_scope.RenderPlaceholder, {
    ratio: ratio,
    size: size,
    label: "\u043E\u0431\u043B\u043E\u0436\u043A\u0430"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "pf-item__title"
  }, title)));
}
Object.assign(__ds_scope, { FeedItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FeedItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/NextCase.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Переход к следующему кейсу с его названием. */
function NextCase({
  label = 'Следующий кейс',
  number,
  title,
  href = '#',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, _extends({
    as: "section",
    className: ['pf-next', className].filter(Boolean).join(' '),
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Meta, {
    mono: true
  }, [label, number].filter(Boolean).join(' · ')), /*#__PURE__*/React.createElement("a", {
    href: href
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-next__title"
  }, title)));
}
Object.assign(__ds_scope, { NextCase });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/NextCase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Screens.jsx
try { (() => {
const DS = window.EditorialDesignSystem_8f642b;
const {
  Header,
  Hero,
  Footer,
  FeedItem,
  MetaRow,
  CaseBlock,
  CaseShots,
  NextCase,
  Meta,
  Reveal
} = DS;

/* Ритм ленты: кейс во всю ширину, затем два в ряд 50/50, снова во всю ширину.
   Больше двух в ряд не ставим. */
function rhythm(list) {
  const rows = [];
  let i = 0;
  while (i < list.length) {
    if (rows.length % 2 === 0 || list.length - i === 1) {
      rows.push([list[i]]);
      i += 1;
    } else {
      rows.push(list.slice(i, i + 2));
      i += 2;
    }
  }
  return rows;
}
function HomeScreen({
  onOpen
}) {
  const [tag, setTag] = React.useState('Все');
  const cases = window.PF.cases.filter(c => tag === 'Все' || c.tags.indexOf(tag) > -1);
  const open = c => e => {
    e.preventDefault();
    if (onOpen) onOpen(c.number);
  };
  const item = (c, i, size) => /*#__PURE__*/React.createElement(FeedItem, {
    key: c.number,
    index: i,
    number: c.number,
    name: c.client,
    stack: c.stack,
    title: c.feedTitle,
    size: size,
    href: "#",
    onClick: open(c),
    cover: c.cover ? /*#__PURE__*/React.createElement("img", {
      src: c.cover,
      alt: "",
      style: {
        width: '100%',
        display: 'block',
        aspectRatio: '16 / 10',
        objectFit: 'cover'
      }
    }) : undefined
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "pf"
  }, /*#__PURE__*/React.createElement(Header, {
    active: tag,
    onFilter: setTag,
    count: window.PF.heroMeta[1]
  }), /*#__PURE__*/React.createElement(Hero, {
    lead: window.PF.lead,
    caption: window.PF.heroMeta[0],
    strap: window.PF.heroMeta[1],
    media: "hero.avif"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-feed",
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-8)'
    }
  }, rhythm(cases).map((row, r) => row.length === 1 ? item(row[0], 0, '1360×850') : /*#__PURE__*/React.createElement("div", {
    className: "pf-feed__pair",
    key: 'p' + r
  }, row.map((c, i) => item(c, i, '668×418')))), cases.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "pf-bleed"
  }, /*#__PURE__*/React.createElement(Meta, {
    as: "div",
    tone: "inactive"
  }, "\u041F\u043E\u0434 \u044D\u0442\u043E\u0442 \u0444\u0438\u043B\u044C\u0442\u0440 \u043A\u0435\u0439\u0441\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442"))), /*#__PURE__*/React.createElement(Footer, {
    line: window.PF.footer.line,
    contacts: window.PF.footer.contacts,
    cta: window.PF.footer.cta
  }));
}
function CaseScreen({
  number = '01',
  onOpen,
  onHome
}) {
  const list = window.PF.cases;
  const idx = Math.max(0, list.findIndex(c => c.number === number));
  const c = list[idx];
  const next = list[(idx + 1) % list.length];
  const shot = ['wide', 'pair', 'wide'];
  return /*#__PURE__*/React.createElement("div", {
    className: "pf"
  }, /*#__PURE__*/React.createElement(Header, {
    onFilter: undefined,
    href: "#",
    onClick: onHome ? e => {
      e.preventDefault();
      onHome();
    } : undefined
  }), /*#__PURE__*/React.createElement("section", {
    className: "pf-case-head"
  }, /*#__PURE__*/React.createElement(Reveal, {
    index: 0
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pf-case-h1"
  }, c.h1)), /*#__PURE__*/React.createElement(Reveal, {
    index: 1,
    className: "pf-bleed",
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(MetaRow, {
    number: c.number,
    name: c.client,
    stack: c.stack
  }))), c.blocks.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: b[0]
  }, /*#__PURE__*/React.createElement(CaseBlock, {
    label: b[0],
    index: 2 + i
  }, b[1]), i < 3 && /*#__PURE__*/React.createElement("div", {
    className: "pf-shots-gap"
  }, i === 1 && c.shots && c.shots.wide ? c.shots.wide.map((src, wi) => /*#__PURE__*/React.createElement(CaseShots, {
    key: src,
    variant: "full",
    index: 2 + i,
    shots: [{
      src,
      ratio: '16:10'
    }],
    className: wi ? 'pf-shots-gap' : undefined
  })) : /*#__PURE__*/React.createElement(CaseShots, {
    variant: shot[i],
    index: 2 + i,
    shots: i === 0 && c.cover ? [{
      src: c.cover,
      ratio: '16:10'
    }] : i === 1 && c.shots && c.shots.pair ? c.shots.pair.map(src => ({
      src,
      ratio: '4:5'
    })) : i === 2 && c.shots && c.shots.wide2 ? [{
      src: c.shots.wide2,
      ratio: c.shots.wide2Tall ? undefined : '16:10'
    }] : undefined
  })))), c.extraShots && /*#__PURE__*/React.createElement("div", {
    className: "pf-shots-gap"
  }, Array.from({
    length: c.extraShots
  }).map((_, p) => /*#__PURE__*/React.createElement(CaseShots, {
    key: p,
    variant: "pair",
    index: 5 + p,
    className: p ? 'pf-shots-gap' : undefined,
    shots: c.extraImgs && c.extraImgs[p] ? c.extraImgs[p].map(src => ({
      src,
      ratio: '4:5'
    })) : undefined
  }))), /*#__PURE__*/React.createElement(NextCase, {
    number: next.number,
    title: next.h1,
    href: "#",
    onClick: onOpen ? e => {
      e.preventDefault();
      onOpen(next.number);
    } : undefined
  }), /*#__PURE__*/React.createElement(Footer, {
    line: window.PF.footer.line,
    contacts: window.PF.footer.contacts,
    cta: window.PF.footer.cta
  }));
}
function App({
  start = 'home',
  startCase = '01'
}) {
  const [view, setView] = React.useState(start === 'case' ? {
    name: 'case',
    id: startCase
  } : {
    name: 'home'
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);
  return view.name === 'home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    onOpen: id => setView({
      name: 'case',
      id
    })
  }) : /*#__PURE__*/React.createElement(CaseScreen, {
    number: view.id,
    onOpen: id => setView({
      name: 'case',
      id
    }),
    onHome: () => setView({
      name: 'home'
    })
  });
}
Object.assign(window, {
  HomeScreen,
  CaseScreen,
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
window.PF = {
  lead: 'Проектируем и собираем сайты: многостраничные, лендинги, каталоги. Ведём задачу от структуры и прототипа до готовой страницы, которую команда клиента дальше обновляет сама, без дизайнера.',
  heroMeta: ['Подборка кейсов', '8 проектов'],
  second: '8 ПРОЕКТОВ',
  filters: ['Все', 'Многостраничные', 'Лендинги', 'Tilda', 'С нуля', 'Редизайн'],
  footer: {
    line: 'Расскажите про задачу — предложим, как её решить',
    cta: 'Написать в телеграм',
    contacts: [{
      value: 'телеграм',
      href: '#'
    }, {
      value: 'почта',
      href: '#'
    }]
  },
  cases: [{
    number: '01',
    client: 'Строительная компания',
    stack: 'Tilda · многостраничный · с нуля · 2024',
    tags: ['Многостраничные', 'Tilda', 'С нуля'],
    cover: 'case-01.png',
    shots: {
      pair: ['case-01-b.png', 'case-01-c.png'],
      wide2: 'case-01-d.png'
    },
    feedTitle: 'Каталог объектов, который команда пополняет сама',
    h1: 'Многостраничный сайт для строительной компании',
    blocks: [['Задача', 'С нуля создать многостраничный сайт строительной компании на Tilda в рамках существующего фирменного стиля и заложить систему, которую команда сможет самостоятельно обновлять без дизайнера.'], ['Исходные данные', 'Компания регулярно добавляет новые строительные проекты. Поэтому важно было не только создать сайт, но и продумать удобный способ масштабировать его по мере появления новых объектов.'], ['Что сделали', 'Разработали главную страницу и систему представления проектов через каталог Tilda. Кастомизировали каталог и карточки проектов под фирменный стиль компании. Для каждого проекта создали отдельную страницу на основе единого шаблона. Теперь новый объект можно добавить копированием готовой страницы и заменой контента.'], ['Результат', 'Масштабируемая система, которую команда поддерживает и обновляет самостоятельно. Добавление нового объекта больше не требует участия дизайнера.']]
  }, {
    number: '02',
    cover: 'case-02.png',
    client: 'Агентство по подбору спикеров',
    shots: {
      pair: ['case-02-b.png', 'case-02-c.png'],
      wide2: 'case-02-d.png'
    },
    stack: 'Tilda · многостраничный · редизайн · 2024',
    tags: ['Многостраничные', 'Tilda', 'Редизайн'],
    feedTitle: 'Из стандартных блоков — в цельную визуальную систему',
    h1: 'Многостраничный сайт для агентства по подбору спикеров',
    blocks: [['Задача', 'Переработать главную страницу, страницу «О компании» и пять страниц эксклюзивных спикеров, сделав сайт современнее, индивидуальнее и выразительнее.'], ['Исходные данные', 'Основные страницы были собраны преимущественно из стандартных блоков Tilda и визуально не отражали уровень экспертизы агентства. При этом важно было сохранить узнаваемость бренда и основные цвета.'], ['Что сделали', 'Изучили запрос клиента, конкурентов и целевую аудиторию, переработали структуру ключевых страниц и подготовили новые прототипы. Сохранили чёрный и белый как основные цвета и добавили синий акцент; чередовали светлые и тёмные блоки для динамики; построили подачу на карточках в bento-стиле; добавили линии и точки как метафору связи клиента с подходящим спикером; интегрировали мотив логотипа в кнопки хедера и футера.'], ['Результат', 'Стандартные страницы Tilda превратились в цельную визуальную систему с индивидуальным характером. Структура стала информативнее и работает на доверие.']]
  }, {
    number: '03',
    cover: 'case-03.png',
    shots: {
      pair: ['case-03-b.png', 'case-03-c.png'],
      wide2: 'case-03-d.png'
    },
    client: 'IT-подкаст',
    stack: 'лендинг · с нуля · 2025',
    tags: ['Лендинги', 'С нуля'],
    feedTitle: 'Медиа-проект с каталогом выпусков',
    h1: 'Лендинг для IT-подкаста',
    blocks: [['Задача', 'Создать живой и современный лендинг, который презентует IT-подкаст потенциальным гостям и компаниям и сохраняет понятную структуру.'], ['Исходные данные', 'Нужно было представить подкаст как самостоятельный медиа-проект: показать формат, выпуски и возможности для сотрудничества, не перегружая страницу.'], ['Что сделали', 'Выстроили структуру через карточки и визуальные блоки, добавили анимации, иконки с эффектом стекла и градиенты. Отдельно продумали каталог выпусков: пользователь смотрит сезоны и переходит к нужному выпуску на удобной площадке.'], ['Результат', 'Динамичный лендинг с понятной структурой, который работает как точка входа для гостей и партнёров.']]
  }, {
    number: '04',
    cover: 'case-04.png',
    shots: {
      pair: ['case-04-b.png', 'case-04-c.png'],
      wide2: 'case-04-d.png'
    },
    client: 'Кейтеринговая компания',
    extraShots: 2,
    extraImgs: [['case-04-e1.png', 'case-04-e2.png'], ['case-04-e3.png', 'case-04-e4.png']],
    stack: 'многостраничный · три направления',
    tags: ['Многостраничные'],
    feedTitle: 'Три направления бизнеса в одной системе',
    h1: 'Корпоративный сайт для кейтеринговой компании',
    blocks: [['Задача', 'Разработать сайт для компании, которая занимается корпоративным питанием, организацией кейтеринга и арендой посуды и оборудования. Основная задача заключалась в том, чтобы объединить несколько направлений бизнеса в единую цифровую экосистему и при этом выстроить для каждого из них понятный путь к заявке.'], ['Исходные данные', 'Компания работает сразу с несколькими направлениями и разными сценариями обращения. Корпоративным клиентам важно разобраться в условиях организации питания и меню, заказчикам мероприятий — выбрать подходящий формат кейтеринга, а клиентам направления аренды — быстро ознакомиться с ассортиментом и подобрать необходимые позиции.\nНужно было структурировать большой объём информации, разделить направления между собой и при этом сохранить целостное восприятие бренда.'], ['Что сделали', 'Разработали структуру сайта и пользовательские сценарии для каждого направления.\nГлавная страница знакомит с компанией и помогает быстро перейти к нужной услуге. Для корпоративного питания сформировали отдельный сценарий с описанием формата работы, преимуществами, вариантами меню, процессом сотрудничества и возможностью заказать дегустацию.\nДля кейтеринга выстроили подачу вокруг форматов мероприятий, меню, процесса организации и реализованных проектов. Пользователь может последовательно ознакомиться с возможностями компании и оставить заявку на организацию мероприятия.\nНаправление аренды получило собственную структуру с категориями оборудования и посуды, популярными позициями, готовыми наборами и примерами использования.\nВсе направления объединили единой визуальной системой, навигацией и повторно используемыми интерфейсными решениями. Также проработали адаптивные версии сайта для разных устройств.'], ['Результат', 'Получился многостраничный корпоративный сайт, который объединяет несколько направлений бизнеса в единой системе.\nКаждая услуга получила собственную структуру и сценарий взаимодействия: от первого знакомства с предложением до конкретного целевого действия — заявки, консультации или заказа дегустации. При этом пользователь может легко переключаться между направлениями, а компания получила масштабируемую структуру для дальнейшего развития сайта.']]
  }, {
    number: '05',
    cover: 'case-05.png',
    shots: {
      pair: ['case-05-b.png', 'case-05-c.png'],
      wide2: 'case-05-d.png'
    },
    client: 'Производственная компания',
    stack: 'многостраничный · корпоративный',
    tags: ['Многостраничные'],
    feedTitle: 'Сложное производство, объяснённое заказчику',
    h1: 'Корпоративный сайт для производственной компании',
    blocks: [['Задача', 'Разработать корпоративный сайт для производственной компании. Основная задача заключалась в том, чтобы понятно представить сложное производство, показать полный цикл работы компании и сделать сайт инструментом привлечения новых заказчиков.'], ['Исходные данные', 'У компании широкий спектр производственных возможностей, который включает проектирование, изготовление оснастки и непосредственно литейное производство. Потенциальному заказчику важно быстро понять, какие задачи может решить компания, с какими материалами она работает и какой результат может получить.\nПри этом целевая аудитория сайта в значительной степени состоит из технических специалистов и представителей промышленных предприятий. Для них важны конкретика, производственные компетенции, оборудование и возможности предприятия.'], ['Что сделали', 'Выстроили структуру сайта вокруг ключевых направлений и производственных возможностей компании.\nНа первом экране и главной странице сформировали понятное позиционирование, которое сразу объясняет специализацию предприятия. Далее последовательно раскрыли направления работы, технологии и производственные процессы.\nСложную техническую информацию структурировали так, чтобы пользователь мог быстро перейти к интересующему направлению и разобраться в возможностях производства. Отдельное внимание уделили демонстрации оборудования, технологий, производственных процессов и реализованных возможностей компании.\nТакже выстроили сценарии обращения для потенциальных заказчиков: пользователь может ознакомиться с услугами и компетенциями предприятия, понять возможности производства и перейти к обсуждению своего проекта.\nВизуальный стиль построили на индустриальной эстетике и крупных выразительных визуалах, связанных с производством. Это позволило уйти от ощущения типового промышленного сайта и сделать подачу компании более современной и технологичной.'], ['Результат', 'Получился корпоративный сайт, который систематизирует информацию о производстве и помогает компании понятнее презентовать свои компетенции потенциальным заказчикам.\nСайт показывает полный спектр возможностей предприятия и делает сложный производственный процесс более прозрачным для клиента. В результате сайт превратился в инструмент презентации компании и её экспертизы.']]
  }, {
    number: '06',
    cover: 'case-06.png',
    shots: {
      pair: ['case-06-b.png', 'case-06-c.png'],
      wide2: 'case-06-d.png'
    },
    client: 'Поставщик запчастей для карьерной техники',
    stack: 'многостраничный · каталог',
    tags: ['Многостраничные'],
    feedTitle: 'Каталог, в котором находят нужную деталь',
    h1: 'Корпоративный сайт и каталог для поставщика запчастей',
    blocks: [['Задача', 'Разработать корпоративный сайт для компании, поставляющей запасные части и комплектующие для карьерной и горнодобывающей техники. Основная задача заключалась в том, чтобы превратить сайт из обычной презентации компании в понятный инструмент поиска и подбора продукции для специалистов и предприятий.'], ['Исходные данные', 'Компания работает с большим ассортиментом запчастей для различной карьерной техники и оборудования. Целевая аудитория сайта, как правило, приходит с конкретной задачей: найти нужную деталь, подобрать аналог, отправить заявку или уточнить возможность поставки.\nПри этом ассортимент сложно представить в формате обычного каталога.'], ['Что сделали', 'Сформировали структуру сайта вокруг основных пользовательских сценариев: поиска необходимой запчасти, знакомства с ассортиментом и обращения в компанию для подбора или заказа.\nГлавная страница сразу знакомит с направлением компании и позволяет перейти к основным категориям продукции. Каталог структурировали таким образом, чтобы пользователь мог последовательно сужать область поиска и быстрее находить нужные запчасти.\nПомимо ассортимента, на сайте раскрыли информацию о компании, условиях сотрудничества и процессе работы с заказом.\nОтдельное внимание уделили сценариям обращения. Пользователь может оставить заявку на подбор запчасти, отправить запрос или связаться со специалистами, даже если не нашёл конкретную позицию в каталоге.\nВизуальную систему построили вокруг промышленной тематики и технического характера продукта. Интерфейс сделали строгим и функциональным, с акцентом на структуру каталога, читаемость информации и быстрый доступ к ключевым действиям.'], ['Результат', 'Получился корпоративный сайт с каталогом, который одновременно решает две задачи: помогает клиентам быстрее ориентироваться в ассортименте и выступает инструментом привлечения заявок для компании.\nПользователь получает несколько сценариев поиска нужной продукции, а компания может принимать запросы не только на конкретные позиции из каталога, но и на индивидуальный подбор запчастей.']]
  }, {
    number: '07',
    cover: 'case-07.png',
    shots: {
      pair: ['case-07-b.png', 'case-07-c.png'],
      wide2: 'case-07-d.png'
    },
    client: 'Креативное агентство полного цикла',
    stack: 'многостраничный · портфолио',
    tags: ['Многостраничные'],
    feedTitle: 'Пять направлений и портфолио в одной структуре',
    h1: 'Корпоративный сайт для креативного агентства полного цикла',
    blocks: [['Задача', 'Разработать сайт для креативного цеха полного цикла, который объединяет несколько направлений работы: брендинг, дизайн, продакшен, диджитал и развитие социальных сетей.\nЗадача заключалась в том, чтобы собрать все направления и проекты компании в единую цифровую систему и создать сайт, который одновременно презентует экспертизу команды, показывает масштаб и разнообразие работ и помогает потенциальному клиенту быстро понять, какие задачи можно решить вместе с компанией.'], ['Исходные данные', 'Компания работает сразу в нескольких креативных направлениях и выполняет широкий спектр задач: от разработки позиционирования и айдентики до фото- и видеопродакшена, создания сайтов, 3D-графики, анимации, рекламных стратегий и работы с социальными сетями.\nОсновная сложность заключалась в большом количестве разных услуг и проектов. Нужно было выстроить понятную структуру, чтобы пользователь не терялся внутри всех направлений, но при этом мог увидеть широту компетенций компании.\nОтдельной задачей стало формирование сильной визуальной подачи. Для креативной компании сайт должен был работать не только как каталог услуг, но и как самостоятельный инструмент демонстрации вкуса, подхода и уровня команды.'], ['Что сделали', 'Разработали структуру многостраничного сайта с основными разделами: услуги, проекты, информация о компании и контакты.\nНа главной странице сформировали последовательный сценарий знакомства с компанией. Пользователь сразу видит позиционирование, ключевые направления работы и масштаб команды, а затем постепенно погружается в услуги, проекты, преимущества и отзывы клиентов.\nВсе услуги объединили в пять ключевых направлений: брендинг, продакшен, дизайн, диджитал и социальные сети. Для каждого направления предусмотрена отдельная подача с описанием конкретных задач, которые команда может решать для бизнеса.\nБольшое внимание уделили портфолио. Проекты представлены как самостоятельный инструмент продажи экспертизы: пользователь может фильтровать работы по направлениям и переходить на отдельные страницы кейсов, где подробнее раскрывается задача, результат и визуальная часть проекта.\nТакже разработали раздел о компании с презентацией команды, ключевых показателей, клиентов и подхода к работе.\nВизуальную концепцию построили вокруг крупных заголовков, нестандартной сетки, масштабной типографики и большого количества фото- и видеоконтента.'], ['Результат', 'Получился корпоративный сайт и портфолио, объединяющее все направления работы компании в единую систему.\nСайт помогает потенциальному клиенту быстро понять, чем занимается компания, ознакомиться с конкретными услугами и увидеть реальные проекты в нужной категории. Структура сайта также позволяет легко расширять портфолио и добавлять новые направления или проекты.']]
  }, {
    number: '08',
    cover: 'case-08.png',
    shots: {
      pair: ['case-08-b.png', 'case-08-c.png'],
      wide2: 'case-08-d.png',
      wide2Tall: true
    },
    client: 'Цифровой сервис',
    stack: 'лендинг · продукт',
    tags: ['Лендинги'],
    feedTitle: 'Продукт, объяснённый за одну прокрутку',
    h1: 'Сайт для цифрового сервиса',
    blocks: [['Задача', 'Разработать современный сайт для сервиса, который помогает презентовать продукт, его возможности и ценность для потенциальных клиентов. Основная задача заключалась в том, чтобы понятно объяснить принцип работы продукта, структурировать информацию о возможностях сервиса и провести пользователя к целевому действию.'], ['Исходные данные', 'Продукт объединяет несколько функциональных возможностей, поэтому важно было быстро объяснить пользователю, какую задачу решает сервис и как он может использовать его в своей работе.\nИнформация требовала чёткой структуры: пользователь должен был последовательно пройти путь от общего понимания продукта к изучению конкретных возможностей и принять решение о дальнейшем взаимодействии.\nПри этом сайт должен был не просто перечислять функции, а формировать понятное представление о продукте и его преимуществах.'], ['Что сделали', 'Выстроили структуру сайта вокруг сценария знакомства с продуктом.\nНа первом экране сформировали понятное позиционирование и ключевое сообщение, которое сразу объясняет основную ценность сервиса. Далее последовательно раскрыли его возможности, принцип работы и преимущества.\nДля функциональных возможностей сформировали отдельные информационные блоки, позволяющие показать, какие задачи можно решать с помощью сервиса. Сложную информацию разделили на логические этапы, чтобы пользователь не сталкивался с перегруженным описанием продукта.\nТакже проработали сценарии перехода к целевым действиям, разместив ключевые точки взаимодействия на протяжении всего пользовательского пути.\nВизуальную концепцию построили вокруг современного цифрового продукта: крупная типографика, выразительная композиция, интерфейсные элементы и визуальные акценты помогают поддерживать ощущение технологичного сервиса и одновременно упрощают восприятие информации.'], ['Результат', 'Получился сайт, который последовательно знакомит пользователя с продуктом и его возможностями.\nВместо набора разрозненных функций сформирован цельный сценарий: пользователь понимает, какую задачу решает сервис, знакомится с его возможностями и получает понятный путь к дальнейшему взаимодействию.\nВ результате сайт стал одновременно презентационной площадкой продукта и инструментом, который помогает объяснить его ценность потенциальным пользователям.']]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FilterPill = __ds_scope.FilterPill;

__ds_ns.Meta = __ds_scope.Meta;

__ds_ns.PillButton = __ds_scope.PillButton;

__ds_ns.Plinth = __ds_scope.Plinth;

__ds_ns.RenderPlaceholder = __ds_scope.RenderPlaceholder;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.CaseBlock = __ds_scope.CaseBlock;

__ds_ns.CaseShots = __ds_scope.CaseShots;

__ds_ns.FeedItem = __ds_scope.FeedItem;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.MetaRow = __ds_scope.MetaRow;

__ds_ns.NextCase = __ds_scope.NextCase;

})();
