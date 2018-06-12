import { switchMap } from 'rxjs/operators';
import { tap, sample, groupBy } from 'rxjs/operators';
import { filter, take } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ElementRef, Injector, ViewChild, Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { BetterScrollDirective, BetterManagerService } from 'iwe7-better-scroll';
@Component({
    selector: 'keyboard-emoji',
    templateUrl: 'keyboard-emoji.html',
    styleUrls: ['./keyboard-emoji.scss']
})
export class KeyboardEmojiComponent {
    smaileys: string = `😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤔 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 😬 😰 😱 😳 😵 😡 😠 😷 🤒 🤕 🤢 🤧 😇 🤠 🤡 🤥 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾`;
    peoples: string = `👶 👧 👦 👩 👨 👵 👴 👲 👳‍ 👳‍  👮‍ 👮‍️ 👷‍️ 👷‍️ 💂‍️ 💂‍️ 🕵️️ 🕵️️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅  👼 🤰 🙇‍️ 🙇‍️ 💁‍️ 💁‍️ 🙅‍ 🙅‍️ 🙆‍️ 🙆‍️ 🙋‍️ 🙋‍️ 🤦‍️ 🤦‍️ 🤷‍️ 🤷‍️ 🙎‍ 🙎‍ 🙍‍ 🙍‍️ 💇‍️ 💇‍️ 💆‍️ 💆‍️ 💅 🤳 💃 🕺 👯‍ 👯‍️ 🕴 🚶‍️ 🚶‍️ 🏃‍️ 🏃‍ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥`;
    clothings: string = `👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🎩 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🌂`;
    pales: string = `👶🏻 👦🏻 👧🏻 👨🏻 👩🏻 👱🏻‍ 👱🏻 👴🏻 👵🏻 👲🏻 👳🏻‍ 👳🏻 👮🏻‍ 👮🏻 👷🏻‍ 👷🏻 💂🏻‍ 💂🏻 🕵🏻‍ 🕵🏻 👩🏻‍⚕️ 👨🏻‍⚕️ 👩🏻‍🌾 👨🏻‍🌾 👩🏻‍🍳 👨🏻‍🍳 👩🏻‍🎓 👨🏻‍🎓 👩🏻‍🎤 👨🏻‍🎤 👩🏻‍🏫 👨🏻‍🏫 👩🏻‍🏭 👨🏻‍🏭 👩🏻‍💻 👨🏻‍💻 👩🏻‍💼 👨🏻‍💼 👩🏻‍🔧 👨🏻‍🔧 👩🏻‍🔬 👨🏻‍🔬 👩🏻‍🎨 👨🏻‍🎨 👩🏻‍🚒 👨🏻‍🚒 👩🏻‍✈️ 👨🏻‍✈️ 👩🏻‍🚀 👨🏻‍🚀 👩🏻‍⚖️ 👨🏻‍⚖️ 🤶🏻 🎅🏻 👸🏻 🤴🏻 👰🏻 🤵🏻 👼🏻 🤰🏻 🙇🏻‍ 🙇🏻 💁🏻 💁🏻‍️ 🙅🏻 🙅🏻‍ 🙆🏻 🙆🏻‍ 🙋🏻 🙋🏻‍ 🤦🏻‍ 🤦🏻‍ 🤷🏻‍ 🤷🏻‍️ 🙎🏻 🙎🏻‍ 🙍🏻 🙍🏻‍ 💇🏻 💇🏻‍ 💆🏻 💆🏻‍️ 🕴🏻 💃🏻 🕺🏻 🚶🏻‍ 🚶🏻 🏃🏻‍ 🏃🏻 🏻 👐🏻 🙌🏻 👏🏻 🙏🏻 👍🏻 👎🏻 👊🏻 ✊🏻 🤛🏻 🤜🏻 🤞🏻 ✌🏻 🏻 🤘🏻 👌🏻 👈🏻 👉🏻 👆🏻 👇🏻 ☝🏻 ✋🏻 🤚🏻 🖐🏻 🖖🏻 👋🏻 🤙🏻 💪🏻 🖕🏻 ✍🏻 🤳🏻 💅🏻 👂🏻 👃🏻`;
    creams: string = `👶🏼 👦🏼 👧🏼 👨🏼 👩🏼 👱🏼‍️ 👱🏼 👴🏼 👵🏼 👲🏼 👳🏼‍️ 👳🏼 👮🏼‍️ 👮🏼 👷🏼‍️ 👷🏼 💂🏼‍️ 💂🏼 🕵🏼‍️ 🕵🏼 👩🏼‍⚕️ 👨🏼‍⚕️ 👩🏼‍🌾 👨🏼‍🌾 👩🏼‍🍳 👨🏼‍🍳 👩🏼‍🎓 👨🏼‍🎓 👩🏼‍🎤 👨🏼‍🎤 👩🏼‍🏫 👨🏼‍🏫 👩🏼‍🏭 👨🏼‍🏭 👩🏼‍💻 👨🏼‍💻 👩🏼‍💼 👨🏼‍💼 👩🏼‍🔧 👨🏼‍🔧 👩🏼‍🔬 👨🏼‍🔬 👩🏼‍🎨 👨🏼‍🎨 👩🏼‍🚒 👨🏼‍🚒 👩🏼‍✈️ 👨🏼‍✈️ 👩🏼‍🚀 👨🏼‍🚀 👩🏼‍⚖️ 👨🏼‍⚖️ 🤶🏼 🎅🏼 👸🏼 🤴🏼 👰🏼 🤵🏼 👼🏼 🤰🏼 🙇🏼‍️ 🙇🏼 💁🏼 💁🏼‍ 🙅🏼 🙅🏼‍ 🙆🏼 🙆🏼‍ 🙋🏼 🙋🏼‍ 🤦🏼‍️ 🤦🏼‍ 🤷🏼‍️ 🤷🏼‍ 🙎🏼 🙎🏼‍ 🙍🏼 🙍🏼‍ 💇🏼 💇🏼‍ 💆🏼 💆🏼‍ 🕴🏼 💃🏼 🕺🏼 🚶🏼‍️ 🚶🏼 🏃🏼‍️ 🏃🏼 🏼 👐🏼 🙌🏼 👏🏼 🙏🏼 👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼 🤜🏼 🤞🏼 ✌🏼 🏼 🤘🏼 👌🏼 👈🏼 👉🏼 👆🏼 👇🏼 ☝🏼 ✋🏼 🤚🏼 🖐🏼 🖖🏼 👋🏼 🤙🏼 💪🏼 🖕🏼 ✍🏼 🤳🏼 💅🏼 👂🏼 👃🏼`;
    moderates: string = `👶🏽 👦🏽 👧🏽 👨🏽 👩🏽 👱🏽‍️ 👱🏽 👴🏽 👵🏽 👲🏽 👳🏽‍️ 👳🏽 👮🏽‍️ 👮🏽 👷🏽‍️ 👷🏽 💂🏽‍️ 💂🏽 🕵🏽‍️ 🕵🏽 👩🏽‍⚕️ 👨🏽‍⚕️ 👩🏽‍🌾 👨🏽‍🌾 👩🏽‍🍳 👨🏽‍🍳 👩🏽‍🎓 👨🏽‍🎓 👩🏽‍🎤 👨🏽‍🎤 👩🏽‍🏫 👨🏽‍🏫 👩🏽‍🏭 👨🏽‍🏭 👩🏽‍💻 👨🏽‍💻 👩🏽‍💼 👨🏽‍💼 👩🏽‍🔧 👨🏽‍🔧 👩🏽‍🔬 👨🏽‍🔬 👩🏽‍🎨 👨🏽‍🎨 👩🏽‍🚒 👨🏽‍🚒 👩🏽‍✈️ 👨🏽‍✈️ 👩🏽‍🚀 👨🏽‍🚀 👩🏽‍⚖️ 👨🏽‍⚖️ 🤶🏽 🎅🏽 👸🏽 🤴🏽 👰🏽 🤵🏽 👼🏽 🤰🏽 🙇🏽‍️ 🙇🏽 💁🏽 💁🏽‍ 🙅🏽 🙅🏽‍ 🙆🏽 🙆🏽‍ 🙋🏽 🙋🏽‍ 🤦🏽‍️ 🤦🏽‍ 🤷🏽‍️ 🤷🏽‍ 🙎🏽 🙎🏽‍ 🙍🏽 🙍🏽‍ 💇🏽 💇🏽‍ 💆🏽 💆🏽‍ 🕴🏼 💃🏽 🕺🏽 🚶🏽‍️ 🚶🏽 🏃🏽‍️ 🏃🏽 🏽 👐🏽 🙌🏽 👏🏽 🙏🏽 👍🏽 👎🏽 👊🏽 ✊🏽 🤛🏽 🤜🏽 🤞🏽 ✌🏽 🏽 🤘🏽 👌🏽 👈🏽 👉🏽 👆🏽 👇🏽 ☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽 👋🏽 🤙🏽 💪🏽 🖕🏽 ✍🏽 🤳🏽 💅🏽 👂🏽 👃🏽`;
    darks: string = `👶🏾 👦🏾 👧🏾 👨🏾 👩🏾 👱🏾‍️ 👱🏾 👴🏾 👵🏾 👲🏾 👳🏾‍️ 👳🏾 👮🏾‍️ 👮🏾 👷🏾‍️ 👷🏾 💂🏾‍️ 💂🏾 🕵🏾‍️ 🕵🏾 👩🏾‍⚕️ 👨🏾‍⚕️ 👩🏾‍🌾 👨🏾‍🌾 👩🏾‍🍳 👨🏾‍🍳 👩🏾‍🎓 👨🏾‍🎓 👩🏾‍🎤 👨🏾‍🎤 👩🏾‍🏫 👨🏾‍🏫 👩🏾‍🏭 👨🏾‍🏭 👩🏾‍💻 👨🏾‍💻 👩🏾‍💼 👨🏾‍💼 👩🏾‍🔧 👨🏾‍🔧 👩🏾‍🔬 👨🏾‍🔬 👩🏾‍🎨 👨🏾‍🎨 👩🏾‍🚒 👨🏾‍🚒 👩🏾‍✈️ 👨🏾‍✈️ 👩🏾‍🚀 👨🏾‍🚀 👩🏾‍⚖️ 👨🏾‍⚖️ 🤶🏾 🎅🏾 👸🏾 🤴🏾 👰🏾 🤵🏾 👼🏾 🤰🏾 🙇🏾‍️ 🙇🏾 💁🏾 💁🏾‍️ 🙅🏾 🙅🏾‍️ 🙆🏾 🙆🏾‍️ 🙋🏾 🙋🏾‍️ 🤦🏾‍️ 🤦🏾‍️ 🤷🏾‍️ 🤷🏾‍️ 🙎🏾 🙎🏾‍️ 🙍🏾 🙍🏾‍️ 💇🏾 💇🏾‍️ 💆🏾 💆🏾‍️ 🕴🏾 💃🏾 🕺🏾 🚶🏾‍️ 🚶🏾 🏃🏾‍️ 🏃🏾 🏾 👐🏾 🙌🏾 👏🏾 🙏🏾 👍🏾 👎🏾 👊🏾 ✊🏾 🤛🏾 🤜🏾 🤞🏾 ✌🏾 🏾 🤘🏾 👌🏾 👈🏾 👉🏾 👆🏾 👇🏾 ☝🏾 ✋🏾 🤚🏾 🖐🏾 🖖🏾 👋🏾 🤙🏾 💪🏾 🖕🏾 ✍🏾 🤳🏾 💅🏾 👂🏾 👃🏾`;
    blacks: string = `👶🏿 👦🏿 👧🏿 👨🏿 👩🏿 👱🏿‍️ 👱🏿 👴🏿 👵🏿 👲🏿 👳🏿‍️ 👳🏿 👮🏿‍️ 👮🏿 👷🏿‍️ 👷🏿 💂🏿‍️ 💂🏿 🕵🏿‍️ 🕵🏿 👩🏿‍⚕️ 👨🏿‍⚕️ 👩🏿‍🌾 👨🏿‍🌾 👩🏿‍🍳 👨🏿‍🍳 👩🏿‍🎓 👨🏿‍🎓 👩🏿‍🎤 👨🏿‍🎤 👩🏿‍🏫 👨🏿‍🏫 👩🏿‍🏭 👨🏿‍🏭 👩🏿‍💻 👨🏿‍💻 👩🏿‍💼 👨🏿‍💼 👩🏿‍🔧 👨🏿‍🔧 👩🏿‍🔬 👨🏿‍🔬 👩🏿‍🎨 👨🏿‍🎨 👩🏿‍🚒 👨🏿‍🚒 👩🏿‍✈️ 👨🏿‍✈️ 👩🏿‍🚀 👨🏿‍🚀 👩🏿‍⚖️ 👨🏿‍⚖️ 🤶🏿 🎅🏿 👸🏿 🤴🏿 👰🏿 🤵🏿 👼🏿 🤰🏿 🙇🏿‍️ 🙇🏿 💁🏿 💁🏿‍️ 🙅🏿 🙅🏿‍️ 🙆🏿 🙆🏿‍️ 🙋🏿 🙋🏿‍️ 🤦🏿‍️ 🤦🏿‍️ 🤷🏿‍️ 🤷🏿‍️ 🙎🏿 🙎🏿‍️ 🙍🏿 🙍🏿‍️ 💇🏿 💇🏿‍️ 💆🏿 💆🏿‍️ 🕴🏿 💃🏿 🕺🏿 🚶🏿‍️ 🚶🏿 🏃🏿‍️ 🏃🏿 🏿 👐🏿 🙌🏿 👏🏿 🙏🏿 👍🏿 👎🏿 👊🏿 ✊🏿 🤛🏿 🤜🏿 🤞🏿 ✌🏿 🏿 🤘🏿 👌🏿 👈🏿 👉🏿 👆🏿 👇🏿 ☝🏿 ✋🏿 🤚🏿 🖐🏿 🖖🏿 👋🏿 🤙🏿 💪🏿 🖕🏿 ✍🏿 🤳🏿 💅🏿 👂🏿 👃🏿`;
    animals: string = `🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🕷 🕸 🦂 🐢 🐍 🦎 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦍 🐘 🦏 🐪 🐫 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫`;
    foods: string = `🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥝 🍅 🍆 🥑 🥦 🥒 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🍤 🍙 🍚 🍘 🍥 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽`;
    actives: string = `⚽️ 🏀 🏈 ⚾️ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🎿 ⛷ 🏂 🏋️‍ 🏋🏻‍ 🏋🏼‍ 🏋🏽‍ 🏋🏾‍ 🏋🏿‍ 🏋️‍ 🏋🏻‍ 🏋🏼‍ 🏋🏽‍ 🏋🏾‍ 🏋🏿‍ 🤼‍ 🤼‍ 🤸‍ 🤸🏻‍ 🤸🏼‍ 🤸🏽‍ 🤸🏾‍ 🤸🏿‍ 🤸‍ 🤸🏻‍ 🤸🏼‍ 🤸🏽‍ 🤸🏾‍ 🤸🏿‍ ⛹️‍ ⛹🏻‍ ⛹🏼‍ ⛹🏽‍ ⛹🏾‍ ⛹🏿‍ ⛹️‍ ⛹🏻‍ ⛹🏼‍ ⛹🏽‍ ⛹🏾‍ ⛹🏿‍ 🤺 🤾‍ 🤾🏻‍ 🤾🏼‍ 🤾🏾‍ 🤾🏾‍ 🤾🏿‍ 🤾‍ 🤾🏻‍ 🤾🏼‍ 🤾🏽‍ 🤾🏾‍ 🤾🏿‍ 🏌️‍ 🏌🏻‍ 🏌🏼‍ 🏌🏽‍ 🏌🏾‍ 🏌🏿‍ 🏌️‍ 🏌🏻‍ 🏌🏼‍ 🏌🏽‍ 🏌🏾‍ 🏌🏿‍ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🏄‍ 🏄🏻‍ 🏄🏼‍ 🏄🏽‍ 🏄🏾‍ 🏄🏿‍ 🏄‍ 🏄🏻‍ 🏄🏼‍ 🏄🏽‍ 🏄🏾‍ 🏄🏿‍ 🏊‍ 🏊🏻‍ 🏊🏼‍ 🏊🏽‍ 🏊🏾‍ 🏊🏿‍ 🏊‍ 🏊🏻‍ 🏊🏼‍ 🏊🏽‍ 🏊🏾‍ 🏊🏿‍ 🤽‍ 🤽🏻‍ 🤽🏼‍ 🤽🏽‍ 🤽🏾‍ 🤽🏿‍ 🤽‍ 🤽🏻‍ 🤽🏼‍ 🤽🏽‍ 🤽🏾‍ 🤽🏿‍ 🚣‍ 🚣🏻‍ 🚣🏼‍ 🚣🏽‍ 🚣🏾‍ 🚣🏿‍ 🚣‍ 🚣🏻‍ 🚣🏼‍ 🚣🏽‍ 🚣🏾‍ 🚣🏿‍ 🚵‍ 🚵🏻‍ 🚵🏼‍ 🚵🏽‍ 🚵🏾‍ 🚵🏿‍ 🚵‍ 🚵🏻‍ 🚵🏼‍ 🚵🏽‍ 🚵🏾‍ 🚵🏿‍ 🚴‍ 🚴🏻‍ 🚴🏼‍ 🚴🏽‍ 🚴🏾‍ 🚴🏿‍ 🚴‍ 🚴🏻‍ 🚴🏼‍ 🚴🏽‍ 🚴🏾‍ 🚴🏿‍ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍ 🤹🏻‍ 🤹🏼‍ 🤹🏽‍ 🤹🏾‍ 🤹🏿‍ 🤹‍ 🤹🏻‍ 🤹🏼‍ 🤹🏽‍ 🤹🏾‍ 🤹🏿‍ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🎯 🎳 🎮 🎰`;
    travels: string = `🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁`;
    objects: string = `⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓`;
    symbols: string = `❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧`;
    flags: string = `🏳️ 🏴 🏁 🚩 🏳️‍🌈 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼`;
    @ViewChild(BetterScrollDirective) betterScroll: BetterScrollDirective;
    @ViewChild('container') container: ElementRef;

    // 表情符号与任务
    list: any[] = [];
    constructor(
        public ele: ElementRef,
        injector: Injector,
        betterManagerService: BetterManagerService,
        public render: Renderer2
    ) {
        const emojis = [
            ...this.smaileys.split(' '),
            ...this.peoples.split(' '),
            ...this.clothings.split(' '),
            ...this.pales.split(' '),
            ...this.creams.split(' '),
            ...this.moderates.split(' ')
        ];
        const newLists = [];
        const rowNum = Math.ceil(emojis.length / 5);
        for (let key = 0; key < rowNum; key++) {
            const arrs = [];
            for (let j = 0; j < 5; j++) {
                const emoji = emojis[key * 5 + j];
                if (emoji) {
                    arrs.push(emoji);
                }
            }
            newLists.push(arrs);
        }
        this.list = newLists;
    }

    getChildren() {
        return this.container.nativeElement.children;
    }

    ngAfterViewInit() {
        const width = this.getChildren().length * 50 + 'px';
        this.ele.nativeElement.style.setProperty(`--total-width`, width);
    }

    _betterScroll(e: BetterScrollDirective) { }

    _ngOnHover(e: any) {
        if (e.type === 'start') {
            this.render.addClass(e.ele, 'active');
        } else {
            this.render.removeClass(e.ele, 'active');
        }
    }
}