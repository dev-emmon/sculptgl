import getOptionsURL from 'misc/getOptionsURL';
import english from 'gui/tr/english';
import chinese_s from 'gui/tr/chinese_s';
import chinese_t from 'gui/tr/chinese_t';
import japanese from 'gui/tr/japanese';
import korean from 'gui/tr/korean';
import russian from 'gui/tr/russian';
import turkish from 'gui/tr/turkish';
import swedish from 'gui/tr/swedish';
import french from 'gui/tr/french';

var GuiTR = function (key) {
  var str = GuiTR.languages[GuiTR.select][key] || GuiTR.languages.english[key];
  if (typeof str === 'string')
    return str;
  if (typeof str === 'function')
    return str.apply(this, Array.prototype.slice.call(arguments, 1));
  console.error('No TR found for : ' + key);
  return key;
};

GuiTR.languages = {
  '中文(简体)': chinese_s,
  '中文(繁體)': chinese_t,
  'english': english,
  // '日本語': japanese,
  // '한국어': korean,
  // 'русский': russian,
  // 'turkish': turkish,
  // 'svenska': swedish,
  // 'français': french
};

GuiTR.select = '中文';
var language = window.navigator.language || window.navigator.userLanguage;
if (language) language = language.substr(0, 2);
if (language === 'en') GuiTR.select = 'english';
else if (language === 'zh_s') GuiTR.select = '中文(简体)';
else if (language === 'zh_t') GuiTR.select = '中文(繁體)';
// else if (language === 'ja') GuiTR.select = '日本語';
// else if (language === 'ko') GuiTR.select = '한국어';
// else if (language === 'tr') GuiTR.select = 'turkish';
// else if (language === 'sv') GuiTR.select = 'svenska';

switch (getOptionsURL().language) {
case 'english':
  GuiTR.select = 'english';
  break;
case 'chinese_s':
  GuiTR.select = '中文(简体)';
  break;
case 'chinese_t':
  GuiTR.select = '中文(繁體)';
  break;
case 'korean':
  GuiTR.select = '한국어';
  break;
case 'japanese':
  GuiTR.select = '日本語';
  break;
case 'russian':
  GuiTR.select = 'русский';
  break;
case 'turkish':
  GuiTR.select = 'turkish';
  break;
case 'swedish':
  GuiTR.select = 'svenska';
  break;
case 'french':
  GuiTR.select = 'français';
  break;
}

export default GuiTR;
