const {
    ocr,
    exec,
    clipText,
    appActivate,
    appState,
    findImage,
    openURL,
    appRun,
    inputText,
    rootDir,
    usleep,
    toast,
    getColor,
    touchDown,
    touchUp,
    touchMove,
    keyDown,
    keyUp,
} = at;
var base64 = (function () {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    function encode(input) {
        var str = String(input);
        var output = '';
        for (var i = 0; i < str.length; i += 3) {
            var a = str.charCodeAt(i);
            var b = str.charCodeAt(i + 1) || 0;
            var c = str.charCodeAt(i + 2) || 0;
            var bitmap = (a << 16) | (b << 8) | c;
            output += chars.charAt((bitmap >> 18) & 63);
            output += chars.charAt((bitmap >> 12) & 63);
            output += i + 1 < str.length ? chars.charAt((bitmap >> 6) & 63) : '=';
            output += i + 2 < str.length ? chars.charAt(bitmap & 63) : '=';
        }
        return output;
    }

    function decode(input) {
        var str = String(input).replace(/[^A-Za-z0-9+/]/g, '');
        var output = '';
        for (var i = 0; i < str.length; i += 4) {
            var encoded1 = chars.indexOf(str.charAt(i));
            var encoded2 = chars.indexOf(str.charAt(i + 1));
            var encoded3 = chars.indexOf(str.charAt(i + 2));
            var encoded4 = chars.indexOf(str.charAt(i + 3));
            var bitmap = (encoded1 << 18) | (encoded2 << 12) | (encoded3 << 6) | encoded4;
            output += String.fromCharCode((bitmap >> 16) & 255);
            if (encoded3 !== 64) output += String.fromCharCode((bitmap >> 8) & 255);
            if (encoded4 !== 64) output += String.fromCharCode(bitmap & 255);
        }
        return output;
    }

    return { encode: encode, decode: decode };
})();

// 🚫 TẮT TOÀN BỘ CONSOLE.LOG
console.log = function () { }; // Override console.log thành hàm rỗng

const pathData = rootDir() + "/Facebook/data/";
const imgKhongGuiLaiMa = pathData + "imgKhongGuiLaiMa.png";
const imgDangKySDT = pathData + "imgDangKySDT.png";
const imgThamGiaFacebook = pathData + "imgThamGiaFacebook.png";
const imgTaoTaiKhoanMoi = pathData + "imgTaoTaiKhoanMoi.png";
const imgTaoTaiKhoanMoi1 = pathData + "imgTaoTaiKhoanMoi1.png";
const imgDaCoTaiKhoan = pathData + "imgDaCoTaiKhoan.png";
const imgEmailCuaBanLaGi = pathData + "imgEmailCuaBanLaGi.png";
const imgSoDiDongCuaBanLaGi = pathData + "imgSoDiDongCuaBanLaGi.png";
const imgEmailCuaBanLaGi1 = pathData + "imgEmailCuaBanLaGi1.png";
const imgSoDiDongCuaBanLaGi1 = pathData + "imgSoDiDongCuaBanLaGi1.png";
const imgBanTenGi = pathData + "imgBanTenGi.png";
const imgNhapMaXacNhan = pathData + "imgNhapMaXacNhan.png";
const imgGuiLaiMa = pathData + "imgGuiLaiMa.png";
const imgGiupChungToiXacNhanDoLaBan = pathData + "imgGiupChungToiXacNhanDoLaBan.png";

const imgTroGiup = pathData + "imgTroGiup.png";

const pathConfig = pathData + "config.txt";
const pathFirstname = pathData + "firstname.txt";
const pathLastname = pathData + "lastname.txt";
const pathname = pathData + "name.txt";
const nameIphone = fs.readFile(pathname)[0];

let objConfig;
var myPassword;
var passToSave;
var avtinfo;
var anhbia;
var khoabaove;
var mess;
var mode;
var time30;
var apiClone;
var kho1;
var kho2;
var ketban;
var fa;
var avatar;
var success;
var fail;
var rss;
var lineAcc;
var y = 0;
var row;
var col;
let dausosave = "";
let emailToSave = "";

function _init() {
    objConfig = getObject(fs.readFile(pathConfig)[0]);
    myPassword = objConfig.pass;
    passToSave = "";
    avtinfo = 0;
    anhbia = 0;
    khoabaove = 0;
    video = 0;
    mess = objConfig.mess;
    if (mess != 0) y = 60;
    mode = objConfig.mode;
    time30 = 30;
    time60 = 60;
    key = "";
    apiClone = '6a42fa65e414c359d41da4fd1ae220f8';
    kho1 = objConfig.kho1;
    kho2 = objConfig.kho2;
    ketban = 0;
    fa = 0;
    avatar = objConfig.avatar;
    mailclone = objConfig.mailclone;
    safari = objConfig.safari;
    success = objConfig.success;
    fail = objConfig.fail;
    console.log("CONFIG LOADED: success=" + success + " (type: " + typeof success + "), fail=" + fail + " (type: " + typeof fail + ")");
    rss = objConfig.rss;
    row = objConfig.row;
    col = objConfig.col;
    lineAcc = objConfig.vitri;
    if (nameIphone.startsWith("MAY")) {
        lineAcc = parseInt(nameIphone.replace("MAY", ""), 10);
    }
    toast("Line acc : " + lineAcc, "center", 3);
    if (lineAcc > 10) lineAcc = 1;
}

let intLog = 0;
let intToast = 1;
let dauso = [];

let success1 = 0;
let fail1 = 0;
let batdau = 1;

//112
const bdlFace = "com.facebook.Facebook";
const bdlSha = "com.liguangming.Shadowrocket";
const bdlMess = "com.facebook.Messenger";

const imgNgaysinh = pathData + "imgNgaysinh.png";
const imgLuu = pathData + "imgLuu.png";

const imgLuu1 = pathData + "imgLuu1.png";
const imgThongTin = pathData + "imgThongTin.png";

const imgKhangNghi = pathData + "imgKhangNghi.png";
const imgKhangNghiTiepTuc = pathData + "imgKhangNghiTiepTuc.png";
const imgChungtoi = pathData + "imgChungtoi.png";
const imgPhoneCheckVery = pathData + "imgPhoneCheckVery.png";
const imgPhoneCheckAgant = pathData + "imgPhoneCheckAgant.png";
const imgSDT = pathData + "imgSDT.png";
const imgThietBiOGan = pathData + "imgThietBiOGan.png";

function upTile(sName, intS, intF, sTimein, sTimeout) {
    let urlUp =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=up&name=" +
        sName +
        "&s=" +
        intS +
        "&f=" +
        intF +
        "&timein=" +
        sTimein +
        "&timeout=" +
        sTimeout;
    let x = exec("curl --location -m 10 '" + urlUp + "'");
}

function getRowbyName(name) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=getRow&name=" +
        name;
    let x = exec("curl --location -s '" + urlGet + "'");
    return parseInt(x);
}

function getConfigbyName(name) {
    toast("Setting config...", "center", 5);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=getConfig&name=" +
        name;
    let x = exec("curl --location -s '" + urlGet + "'");
    //fs.writeFile(pathConfig, '', 'w');

    fs.remove(pathConfig); //Xoa file cu
    fs.writeFile(pathConfig, JSON.stringify(getObject(x)));
    return getObject(x);
}

function updateVitri(dong, cot, dulieu) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=setData&dong=" +
        dong +
        "&cot=" +
        cot +
        "&data=" +
        dulieu;
    let x = exec("curl --location -m 30 '" + urlGet + "'");
}

function getRss(dong, cot) {
    toast("Get Rss...", "center", 3);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=getRss&dong=" +
        dong +
        "&cot=" +
        cot;
    console.log(urlGet);
    let x = exec("curl --location -s '" + urlGet + "'");
    return x;
}

function getPhone(dong) {
    toast("Get list phone", "center", 3);
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=getPhone&dong=" +
        dong;
    let data = exec("curl --location -s '" + urlGet + "'");
    let x = getObject(data).data;
    let dataPhone = x.split(",");
    let tam = "";
    let arrPhone = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+"];
    for (let i = 0; i < dataPhone.length; i++) {
        tam = "";
        for (let j = 0; j < dataPhone[i].length; j++) {
            if (_inArray(dataPhone[i][j], arrPhone)) tam += dataPhone[i][j];
        }
        dataPhone[i] = tam;
    }
    return dataPhone;
}

function upClone(dong, cot, dulieu) {
    let urlGet =
        "https://script.google.com/macros/s/AKfycbxjGhr43RDdQIVYdcisKz41D0hvi_7BskTUxHbvYkgmzKyZ8LcAYSnTpH4V3wRyzn4TSg/exec?task=upClone&dong=" +
        dong +
        "&cot=" +
        cot +
        "&data=" +
        dulieu;
    let x = exec("curl --location '" + urlGet + "'");
}

function _randPass(intNum) {
    let kq = "";
    let text = "0123456789";
    for (let i = 0; i < intNum; i++) {
        kq += text[_ranbw(0, 9)];
    }
    return kq;
}
function getObject(strJson) {
    // Kiểm tra đầu vào: nếu không phải là chuỗi hoặc rỗng, trả về đối tượng trống.
    if (typeof strJson !== 'string' || !strJson.trim()) {
        return {};
    }

    // Tìm vị trí của dấu '{' đầu tiên và '}' cuối cùng một cách an toàn.
    const startIndex = strJson.indexOf('{');
    const endIndex = strJson.lastIndexOf('}');

    // Nếu không tìm thấy cấu trúc JSON hợp lệ, trả về đối tượng trống.
    if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
        return {};
    }

    // Trích xuất chuỗi JSON tiềm năng.
    const strObj = strJson.substring(startIndex, endIndex + 1);

    // Sử dụng try-catch để xử lý lỗi khi phân tích JSON.
    try {
        // Phân tích chuỗi và trả về đối tượng.
        return JSON.parse(strObj);
    } catch (e) {
        // Nếu có lỗi (ví dụ: chuỗi không phải là JSON hợp lệ),
        // bắt lỗi và trả về một đối tượng trống để script không bị crash.
        // console.log("Lỗi phân tích JSON: " + e.message); // Ghi log lỗi (hiện đang bị tắt)
        return {};
    }
}
function _gokytu(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case " ":
                _gclick(285, 1289);
                break;
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                numkey();
                _gclick(428, 1282);
                numkey();
                break;
            case ".":
                numkey();
                _gclick(163, 1178);
                numkey();
                break;
        }
    }
}

function _gokytuO(strText) {
    if (strText == "") return;
    if (intLog == 1) console.log("Go KT : " + strText);
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                _gclick(425, 1288);
                break;
            case ".":
                _gclick(516, 1288);
                break;
        }
    }
}
function _gokytuM(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "q":
                _gclick(35, 960);
                break;
            case "w":
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "e":
                _gclick(35 + 75.55 * 2, 960);
                break;
            case "r":
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "t":
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "y":
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "u":
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "i":
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "o":
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "p":
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "a":
                _gclick(75, 1066);
                break;
            case "s":
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "d":
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "f":
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "g":
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "h":
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "j":
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "k":
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "l":
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "z":
                _gclick(150, 1177);
                break;
            case "x":
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "c":
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "v":
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "b":
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "n":
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "m":
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "Q":
                shift();
                _gclick(35, 960);
                break;
            case "W":
                shift();
                _gclick(35 + 75.55 * 1, 960);
                break;
            case "E":
                shift();
                _gclick(35 + 75.55 * 2, 960);

                break;
            case "R":
                shift();
                _gclick(35 + 75.55 * 3, 960);
                break;
            case "T":
                shift();
                _gclick(35 + 75.55 * 4, 960);
                break;
            case "Y":
                shift();
                _gclick(35 + 75.55 * 5, 960);
                break;
            case "U":
                shift();
                _gclick(35 + 75.55 * 6, 960);
                break;
            case "I":
                shift();
                _gclick(35 + 75.55 * 7, 960);
                break;
            case "O":
                shift();
                _gclick(35 + 75.55 * 8, 960);
                break;
            case "P":
                shift();
                _gclick(35 + 75.55 * 9, 960);
                break;
            case "A":
                shift();
                _gclick(75, 1066);
                break;
            case "S":
                shift();
                _gclick(75 + 75.55 * 1, 1066);
                break;
            case "D":
                shift();
                _gclick(75 + 75.55 * 2, 1066);
                break;
            case "F":
                shift();
                _gclick(75 + 75.55 * 3, 1066);
                break;
            case "G":
                shift();
                _gclick(75 + 75.55 * 4, 1066);
                break;
            case "H":
                shift();
                _gclick(75 + 75.55 * 5, 1066);
                break;
            case "J":
                shift();
                _gclick(75 + 75.55 * 6, 1066);
                break;
            case "K":
                shift();
                _gclick(75 + 75.55 * 7, 1066);
                break;
            case "L":
                shift();
                _gclick(75 + 75.55 * 8, 1066);
                break;
            case "Z":
                shift();
                _gclick(150, 1177);
                break;
            case "X":
                shift();
                _gclick(150 + 75.55 * 1, 1177);
                break;
            case "C":
                shift();
                _gclick(150 + 75.55 * 2, 1177);
                break;
            case "V":
                shift();
                _gclick(150 + 75.55 * 3, 1177);
                break;
            case "B":
                shift();
                _gclick(150 + 75.55 * 4, 1177);
                break;
            case "N":
                shift();
                _gclick(150 + 75.55 * 5, 1177);
                break;
            case "M":
                shift();
                _gclick(150 + 75.55 * 6, 1177);
                break;

            case "0":
                numkey();
                _gclick(40 + 74.66 * 9, 965);
                numkey();
                break;
            case "1":
                numkey();
                _gclick(40, 965);
                numkey();
                break;
            case "2":
                numkey();
                _gclick(40 + 74.66 * 1, 965);
                numkey();
                break;
            case "3":
                numkey();
                _gclick(40 + 74.66 * 2, 965);
                numkey();
                break;
            case "4":
                numkey();
                _gclick(40 + 74.66 * 3, 965);
                numkey();
                break;
            case "5":
                numkey();
                _gclick(40 + 74.66 * 4, 965);
                numkey();
                break;
            case "6":
                numkey();
                _gclick(40 + 74.66 * 5, 965);
                numkey();
                break;
            case "7":
                numkey();
                _gclick(40 + 74.66 * 6, 965);
                numkey();
                break;
            case "8":
                numkey();
                _gclick(40 + 74.66 * 7, 965);
                numkey();
                break;
            case "9":
                numkey();
                _gclick(40 + 74.66 * 8, 965);
                numkey();
                break;
            case "@":
                _gclick(420, 1283);
                break;
            case ".":
                _gclick(514, 1283);
                break;
            case "+":
                numkey();
                _gclick(575, 1177);
                numkey();
                break;
        }
    }
}
function numkey() {
    _gclick(45, 1289);
    usleep(300000);
}
function shift() {
    _Click(46, 1177);
    usleep(120000);
}

function _gokytuN(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "0":
                _gclick(375, 1280);
                break;
            case "1":
                _gclick(127, 960);
                break;
            case "2":
                _gclick(374, 960);
                break;
            case "3":
                _gclick(625, 960);
                break;
            case "4":
                _gclick(127, 1066);
                break;
            case "5":
                _gclick(374, 1066);
                break;
            case "6":
                _gclick(625, 1066);
                break;
            case "7":
                _gclick(127, 1174);
                break;
            case "8":
                _gclick(374, 1174);
                break;
            case "9":
                _gclick(625, 1174);
                break;
        }
    }
}

function _gokytuS(strText) {
    if (strText == "") return;
    if (strText[0] == "0") _Click(51, 1283);
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "0":
                _gclick(715, 960);
                break;
            case "1":
                _gclick(40, 960);
                break;
            case "2":
                _gclick(113, 960);
                break;
            case "3":
                _gclick(180, 960);
                break;
            case "4":
                _gclick(260, 960);
                break;
            case "5":
                _gclick(340, 960);
                break;
            case "6":
                _gclick(420, 960);
                break;
            case "7":
                _gclick(490, 960);
                break;
            case "8":
                _gclick(567, 960);
                break;
            case "9":
                _gclick(640, 960);
                break;
            case "+":
                _Click(51, 1280);
                _Click(51, 1180);
                _gclick(639, 960);
                _Click(51, 1180);
                break;
        }
    }
}
function _gokytuP(strText) {
    if (strText == "") return;
    for (let i = 0; i < strText.length; i++) {
        switch (strText[i]) {
            case "+":
                numkey();
                _gclick(375, 1280);
                break;
            case "0":
                _gclick(375, 1280);
                break;
            case "1":
                _gclick(127, 960);
                break;
            case "2":
                _gclick(374, 960);
                break;
            case "3":
                _gclick(625, 960);
                break;
            case "4":
                _gclick(127, 1066);
                break;
            case "5":
                _gclick(374, 1066);
                break;
            case "6":
                _gclick(625, 1066);
                break;
            case "7":
                _gclick(127, 1174);
                break;
            case "8":
                _gclick(374, 1174);
                break;
            case "9":
                _gclick(625, 1174);
                break;
        }
    }
}

function _checkLogin(intTime) {
    let tg = _currentTime();
    let y = 0;
    while (1) {
        y = waitImage(imgLuu1, 1, "top");
        if (y != 0) {
            _Click(380, 1062); //Luu
        }
        if (waitImage(imgSDT, 1, "bottom") != 0) {
            return 283;
        }

        if (_inArray(_gcl(56, 92), [660247]) && _inArray(_gcl(202, 457), [25824])) {
            _Click(370, 450);
            _sleep(1);
            //Dam bao thiet bi
        }
        if (
            _gcl(43, 79) == 526345 &&
            _gcl(43, 92) == 526345 &&
            _gcl(43, 105) == 526345
        )
            return 1;

        if (
            _inArray(_gcl(88, 201), [1846067]) &&
            _inArray(_gcl(230, 1070), [25824])
        ) {
            _Click(375, 1070);
            //Luu
            usleep(1000000);
        }

        if (
            _inArray(_gcl(411, 195), [1537777]) &&
            _inArray(_gcl(328, 159), [7714559])
        ) {
            _Click(375, 1280);
            //Xong (chua co goi y ket ban nao)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(352, 1257), [526345]) &&
            _inArray(_gcl(385, 1271), [526345])
        ) {
            _Click(375, 1270);
            //Bo qua (Ban co muon them so di dong)
            usleep(1000000);
        }
        if (
            _inArray(_gcl(175, 830), [31487]) &&
            _inArray(_gcl(239, 830), [31487])
        ) {
            _Click(239, 830);
            //Luc khac (Dich vu vi tri)
            usleep(1000000);
        }
        if (
            _inArray(_gcl(372, 280), [1925934]) &&
            _inArray(_gcl(206, 1270), [550655])
        ) {
            _Click(400, 1270);
            //Bo qua (Dich vu vi tri)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(165, 1267), [14869993]) &&
            _inArray(_gcl(206, 186), [526345])
        ) {
            _Click(400, 1270);
            //Bo qua (cho phep truy cap danh ba)
            usleep(1000000);
        }

        if (
            _inArray(_gcl(63, 1209), [550655]) &&
            _inArray(_gcl(408, 331), [1537777, 1406712])
        ) {
            _Click(380, 1209);
            usleep(1000000);
        }
        if (
            _inArray(_gcl(142, 818), [31487]) &&
            _inArray(_gcl(614, 818), [31487])
        ) {
            _Click(400, 815);
            //Yeu cau k theo doi
            usleep(1000000);
        }

        if (
            _inArray(_gcl(231, 322), [7780095]) &&
            _inArray(_gcl(231, 1264), [550655])
        ) {
            _Click(312, 1264);
            usleep(1000000);
        }

        if (
            getColor(116, 1125)[0][0] == 550655 &&
            getColor(116, 1217)[0][0] == 14869993
        ) {
            _Click(380, 1217);
            _sleep(2);
            _Click(507, 845);
            usleep(1000000);
        }

        if (waitImage(imgKhangNghi, 1, "bottom") != 0) {
            return 282;
        }
        if (waitImage(imgKhangNghiTiepTuc, 1, "bottom") != 0) {
            return 2822;
        }
        if (
            _inArray(_gcl(220, 1068), [25824]) &&
            _inArray(_gcl(373, 1177), [660247, 1846067])
        ) {
            //luu
            _Click(370, 1070);
            usleep(1000000);
        }
        openURL("fb://feed");
        usleep(2000000);

        if (
            _inArray(550655, [
                _gcl(148, 90),
                _gcl(172, 90),
            ]) /*&& _gcl(689, 80) == 526345*/
        )
            return 2;
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _logFace(strPhone, strPass) {
    // Biến đếm số lần thử mở lại Facebook
    let retry = 0;
    const maxRetry = 5;  // Thử tối đa 5 lần trước khi up lên kho 21

    while (retry < maxRetry) {
        let iCheck;

        // Mở Facebook
        iCheck = openFb(1, "4G");
        if (iCheck == 0) {
            toast("❌ Không thể mở Facebook", "center", 2);
            return 0;
        }

        toast(`🔎 Bắt đầu quy trình đăng nhập (lần ${retry + 1})...`, "center", 1);
        _sleep(5); // Đợi lâu hơn để đảm bảo giao diện tải xong

        // Xử lý màn hình "Tham gia Facebook" trước
        if (imgClick(imgDaCoTaiKhoan, 2, "")) {
            _sleep(3);
        }

        // --- BƯỚC 1: NHẬP SỐ ĐIỆN THOẠI BẰNG TOẠ ĐỘ CHÍNH XÁC ---
        toast("🔍 Đang nhập số điện thoại...", "center", 1);

        // Kiểm tra màu tại tọa độ ô nhập SĐT/email: 73,482=6122619; 73,502=6122619
        if (_gcl(73, 482) == 6122619 && _gcl(73, 502) == 6122619) {
            // Click vào ô nhập số điện thoại hoặc email (73,492 để nhập uid)
            _gclick(73, 492);
            _sleep(2);

            // Nhập UID
            inputText(strPhone);
            _sleep(2);
        } else {
            toast("❌ Không tìm thấy ô nhập SĐT/Email", "center", 2);

            // Đóng Facebook
            _closeFb();
            _sleep(2);

            // Mở và tương tác với CCInfo theo yêu cầu
            toast("🔄 Đang mở CCInfo để thay đổi thông tin...", "center", 2);
            appActivate("com.ccteam.ccinfo");
            usleep(1000000);
            _Click(400, 350);
            _sleep(10);

            retry++;
            continue;
        }

        // --- BƯỚC 2: NHẬP MẬT KHẨU BẰNG TOẠ ĐỘ CHÍNH XÁC ---
        toast("🔍 Đang nhập mật khẩu...", "center", 1);

        // Kiểm tra màu tại tọa độ ô nhập mật khẩu: 69,634=9147808; 85,634=8819101
        if (_gcl(69, 534) == 9147808 && _gcl(85, 534) == 8819101) {
            // Click vào ô nhập mật khẩu (77,634 để nhập pass)
            _gclick(77, 534);
            _sleep(2);
        } else {
            toast("❌ Không tìm thấy ô nhập mật khẩu", "center", 2);

            // Đóng Facebook
            _closeFb();
            _sleep(2);

            // Mở và tương tác với CCInfo theo yêu cầu
            toast("🔄 Đang mở CCInfo để thay đổi thông tin...", "center", 2);
            appActivate("com.ccteam.ccinfo");
            usleep(1000000);
            _Click(400, 350);
            _sleep(10);

            retry++;
            continue;
        }

        // Nhập mật khẩu
        _gokytuM(strPass);
        _sleep(3);

        // --- BƯỚC 3: KIỂM TRA MÀU TẠI TOẠ ĐỘ XÁC ĐỊNH VÀ CLICK NÚT ĐĂNG NHẬP ---
        toast("🔍 Đang kiểm tra và nhấn nút đăng nhập...", "top", 1);

        // Kiểm tra màu tại tọa độ X:230 và X:530, Y:765 màu 25824
        if (_gcl(230, 665) == 25824 && _gcl(530, 665) == 25824) {
            // Click vào nút đăng nhập tại tọa độ 375,765
            _gclick(375, 665);
            _sleep(15);
            return 1;
        } else {
            // Không tìm thấy nút đăng nhập dựa trên màu sắc
            toast(`❌ Không tìm thấy nút đăng nhập. Thử mở CCInfo để thay đổi thông tin...`, "center", 2);

            // Đóng Facebook
            _closeFb();
            _sleep(2);

            // Mở và tương tác với CCInfo theo yêu cầu
            toast("🔄 Đang mở CCInfo để thay đổi thông tin...", "center", 2);
            appActivate("com.ccteam.ccinfo");
            usleep(1000000);
            _Click(400, 350);
            _sleep(10);

            retry++;
            continue;  // Quay lại vòng lặp để thử lại
        }
    }

    // Đã thử đủ số lần mở lại mà vẫn thất bại
    toast(`❌ Đã thử ${maxRetry} lần nhưng vẫn không thể đăng nhập`, "center", 2);
    toast(`⬆️ Đang up thông tin lên kho 21...`, "center", 2);
    upSite(21);  // Up thông tin lên kho 21

    return 0;  // Trả về 0 (thất bại)
}

function _filluid(uid) {
    numkey();
    for (let i = 0; i < uid.length; i++) {
        switch (uid[i]) {
            case "0":
                _gclick(40 + 74.66 * 9, 965);
                break;
            case "1":
                _gclick(40, 965);
                break;
            case "2":
                _gclick(40 + 74.66 * 1, 965);
                break;
            case "3":
                _gclick(40 + 74.66 * 2, 965);
                break;
            case "4":
                _gclick(40 + 74.66 * 3, 965);
                break;
            case "5":
                _gclick(40 + 74.66 * 4, 965);
                break;
            case "6":
                _gclick(40 + 74.66 * 5, 965);
                break;
            case "7":
                _gclick(40 + 74.66 * 6, 965);
                break;
            case "8":
                _gclick(40 + 74.66 * 7, 965);
                break;
            case "9":
                _gclick(40 + 74.66 * 8, 965);
                break;
        }
    }
    numkey();
}

function _gcl(x, y) {
    let kq = getColor(x, y)[0][0];
    if (intLog == 1) console.log(x + " " + y + " : " + kq);
    return kq;
}

function genGmail() {
    // 1. Đọc họ và tên ngẫu nhiên từ file
    let lastName = _readFileLine(pathLastname, 1 + _ranInt(_fileCountLine(pathLastname)));
    let firstName = _readFileLine(pathFirstname, 1 + _ranInt(_fileCountLine(pathFirstname)));

    // 2. Chuẩn hóa chuỗi: bỏ dấu, bỏ khoảng trắng, chuyển thành chữ thường
    const normalize = (str) => {
        if (!str) return "";
        return str.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Xóa các ký tự dấu
            .replace(/đ/g, "d") // Chuyển 'đ' thành 'd'
            .replace(/\s+/g, '') // Xóa khoảng trắng
            .replace(/[^a-z0-9]/g, ''); // Chỉ giữ lại chữ và số
    };

    const cleanFirstName = normalize(firstName);
    const cleanLastName = normalize(lastName);

    // 3. Phần chuỗi cố định
    const suffix = "hellokity";

    // 4. Tạo 4 số ngẫu nhiên
    const randomNumber = _randPass(4);

    // 5. Kết hợp tất cả lại theo định dạng: ho.ten.hellokity + 4so
    const user = `${cleanLastName}.${cleanFirstName}.${suffix}${randomNumber}`;
    const email = user + "@gmail.com";

    if (intLog == 1) console.log("Generated Email: " + email);
    return email;
}
function _regAcc(intI, strMode) {

    let tg;

    let iCheck = 0;
    let c = [6122619, 13423579];

    // Reset 4G và thiết bị đã được di chuyển ra khỏi hàm này và xử lý trước khi gọi
    // Mở Facebook để bắt đầu quy trình đăng ký
    iCheck = openFb(1, strMode);
    if (iCheck == 0) return 0;
    // Thêm kiểm tra "Giúp chúng tôi xác nhận đó là bạn" ngay sau khi mở app
    if (waitImage(imgGiupChungToiXacNhanDoLaBan, 3, "center") != 0) {
        toast("⚠️ Phát hiện màn hình xác nhận CAPTCHA!", "bottom", 2);
        // Đóng app và báo thất bại
        _closeFb(strMode);
        return 0;
    }

    batdau = 0; // Thiết lập batdau = 0
    // Hàm kiểm tra xem đã vào màn hình nhập họ tên chưa
    function isNameInputScreen() {
        // Điều kiện 1: Tìm ảnh
        if (waitImage(imgBanTenGi, 1, "top")) {
            return 1; // Tìm thấy ảnh, trả về 1
        }
        // Điều kiện 2: Kiểm tra pixel
        const pixelCondition1 = _inArray(_gcl(36, 309), [6188412]) && _inArray(_gcl(90, 342), [9147808]);
        const pixelCondition2 = _inArray(_gcl(38, 322), [14541544]) && _inArray(_gcl(90, 368), [10726324]);

        if (pixelCondition1 || pixelCondition2) {
            return 1; // Một trong các điều kiện pixel đúng, trả về 1
        }
        // Nếu không có điều kiện nào đúng, trả về 0
        return 0;
    }

    let clickSuccess = false;
    // Giai đoạn 1: Ưu tiên quét ảnh trong 5 giây
    toast("Ưu tiên quét ảnh...", "center", 2);
    let imageScanTime = _currentTime();
    while (_timeStart(imageScanTime) < 10 && !clickSuccess) {
        toast("Quét ảnh... " + _timeStart(imageScanTime) + "/5s", "top", 1);
        // Lặp lại việc tìm và click 2 ảnh
        if (imgClick(imgTaoTaiKhoanMoi, 1, "")) {
            usleep(500000);
        }
        if (imgClick(imgTaoTaiKhoanMoi1, 1, "")) {
            usleep(500000);
        }
        // Kiểm tra sau mỗi lần thử
        if (isNameInputScreen()) {
            toast("✅ Vào được màn hình tên từ quét ảnh!", "center", 2);
            clickSuccess = true;
            break; // Thoát khỏi vòng lặp quét ảnh
        }
        usleep(500000); // Chờ một chút trước khi quét lại
    }

    // Giai đoạn 2: Nếu quét ảnh không thành công, mới thử các cách khác
    if (!clickSuccess) {
        toast("Quét ảnh thất bại, thử các cách khác...", "center", 2);
        // Thử các bước click trong 15 giây
        let tg = _currentTime();
        while (_timeStart(tg) < 15 && !clickSuccess) {
            toast("🔄 Thử click tọa độ: " + _timeStart(tg) + "/15s", "top", 1);

            // Thử 3 cách lần lượt
            // 1. Click trực tiếp vào tọa độ 1, sau đó tọa độ 2
            toast("🎯 Click tọa độ 1 (375, 1150)", "top", 1);
            _Click(375, 1150);
            usleep(1500000);

            toast("🎯 Click tọa độ 2 (369, 761)", "top", 1);
            _Click(369, 761);
            usleep(1500000);

            if (isNameInputScreen()) {
                toast("✅ Đã vào màn hình nhập họ tên sau khi click 2 tọa độ", "center", 2);
                clickSuccess = true;
                break;
            }
            // 3. Click "Đã có tài khoản" -> "Tạo tài khoản mới" -> vị trí 2
            if (!clickSuccess && waitImage(imgDaCoTaiKhoan, 1, "bottom") != 0) {
                _Click(375, 1240);
                usleep(1000000);
                _Click(375, 1130);
                usleep(1000000);

                if (_inArray(_gcl(369, 761), [25824])) {
                    _Click(369, 761);
                    usleep(1000000);

                    if (isNameInputScreen()) {
                        clickSuccess = true;
                        break;
                    }
                }
            }
            // 4. Click trực tiếp vào vị trí 2
            if (!clickSuccess && _inArray(_gcl(369, 761), [25824])) {
                batdau = 1;
                _Click(369, 761);
                usleep(1000000);

                if (isNameInputScreen()) {
                    clickSuccess = true;
                    break;
                }
            }
            // Click tuần tự các vị trí nếu chưa thành công
            _Click(140, 1150);
            usleep(500000);
            _Click(140, 1240);
            usleep(500000);
            _Click(369, 761);
            usleep(500000);
        }
    } toast("⏳ Đang đợi màn hình nhập họ tên...", "center", 4);
    let foundBanTenGi = false;
    let retry = false;

    // Hàm kiểm tra nhanh
    function checkScreen() {
        // Kiểm tra ảnh "Bạn tên gì"
        if (waitImage(imgBanTenGi, 1, "top") != 0) {
            foundBanTenGi = true;
            return true;
        }
        // Kiểm tra màu sắc màn hình
        if (_inArray(_gcl(243, 308), c) || _inArray(_gcl(95, 382), [16777215])) {
            return true;
        }
        return false;
    }

    // Thử lần đầu
    tg = _currentTime();
    while (_timeStart(tg) < 10) {
        if (checkScreen()) break;

        // Click một số vị trí cần thiết
        if (_inArray(_gcl(407, 780), c) && _inArray(_gcl(407, 892), c)) {
            _Click(386, 824);
        }
        tapUntil(80, 365, 706, 1175, [0], 1, 1);
        usleep(500000);
    }

    // Nếu lần đầu không thành công, thử lại một lần
    if (!foundBanTenGi && !_inArray(_gcl(243, 308), c) && !_inArray(_gcl(95, 382), [16777215])) {
        toast("🔄 Thử lại lần cuối...", "center", 1);
        retry = true;

        // Click tuần tự các vị trí
        _Click(140, 1150);
        usleep(500000);
        _Click(369, 761);
        usleep(500000);

        if (waitImage(imgDaCoTaiKhoan, 1, "bottom") != 0) {
            _Click(140, 1240);
            usleep(500000);
            _Click(140, 1130);
            usleep(500000);
        }

        // Kiểm tra lại
        tg = _currentTime();
        while (_timeStart(tg) < 5) {
            if (checkScreen()) break;
            usleep(500000);
        }
    }

    // Nếu không tìm thấy, thoát
    if (!foundBanTenGi && !_inArray(_gcl(243, 308), c) && !_inArray(_gcl(95, 382), [16777215])) {
        toast("❌ Không tìm thấy màn hình nhập họ tên", "center", 2);
        return 0;
    }

    usleep(1000000);
    toast("🚀 Bắt đầu nhập họ tên", "center", 1);

    // Đọc họ và tên từ file
    let lastName = _readFileLine(pathLastname, 1 + _ranInt(_fileCountLine(pathLastname)));
    let firstName = _readFileLine(pathFirstname, 1 + _ranInt(_fileCountLine(pathFirstname)));

    // Nhập họ
    _Click(175, 375);
    usleep(500000);
    _gokytu(lastName);
    toast("Họ: " + lastName, "bottom", 1);

    // Nhập tên
    function fillFirstName() {
        firstName = _readFileLine(pathFirstname, 1 + _ranInt(_fileCountLine(pathFirstname)));
        _Click(556, 365);
        _waitPixel(706, 1175, 0, 15);
        _Click(530, 370);
        usleep(500000);
        _gokytu(firstName);
        toast("Tên: " + firstName, "bottom", 1);
    }
    fillFirstName();

    _Click(405, 510 + y);
    _sleep(2);
    let nameProcessStart = _currentTime();

    const suggestionColor = 8688803;
    const wrongNameColor = 13832496;
    function checkRowSuggestion() {
        if (getColor(644, 713)[0][0] == suggestionColor && getColor(680, 713)[0][0] == suggestionColor) { // dòng 3
            _Click(663, 713);
            return true;
        }
        if (getColor(644, 601)[0][0] == suggestionColor && getColor(680, 601)[0][0] == suggestionColor) { // dòng 2
            _Click(663, 601);
            return true;
        }
        if (getColor(644, 488)[0][0] == suggestionColor && getColor(680, 488)[0][0] == suggestionColor) { // dòng 1
            _Click(663, 488);
            return true;
        }
        return false;
    }

    function handleNameSuggestions(processStart) {
        while (_timeStart(processStart) < 60) {
            if (checkRowSuggestion()) {
                usleep(300000);
                _Click(405, 510 + y);
                usleep(500000);
                continue;
            }

            if (getColor(662, 376)[0][0] == wrongNameColor) { // Sai tên -> mở ô và xóa
                _Click(562, 376);
                usleep(800000);
                _Click(662, 368);
                usleep(300000);
                fillFirstName();
                _Click(405, 510 + y);
                usleep(500000);
                continue;
            }

            if (waitImage(imgNgaysinh, 1, "center") != 0 || getColor(254, 640 + y)[0][0] == 25824) return true;

            usleep(200000);
        }
        return false;
    }
    if (!handleNameSuggestions(nameProcessStart)) {
        toast("❌ Không xử lý được tên, dừng lại!", "center", 2);
        return 0;
    }

    tg = _currentTime();
    while (1) {
        if (_timeStart(nameProcessStart) >= 30) {
            toast("⏱️ Quá thời gian xử lý tên, làm lại!", "center", 2);
            return 0;
        }
        iCheck = waitImage(imgNgaysinh, 2, "center");

        if (iCheck != 0) break;

        if (getColor(254, 640 + y)[0][0] == 25824) break;

        if (!handleNameSuggestions(nameProcessStart)) {
            toast("❌ Không xử lý được tên, dừng lại!", "center", 2);
            return 0;
        }
        break;
    }

    usleep(1000000);

    toast("Click nút Tiếp 1...", "center", 1);
    touchDown(1, 391, 640);
    usleep(60000);
    touchUp(1, 391, 640);
    usleep(500000);

    usleep(1200000); // Chờ chuyển màn hình (1.2s)    toast("Quét tìm nút Tiếp 2...", "center", 1);
    const targetColorTiep2 = 13833266; // Màu của nút Tiếp 2 theo yêu cầu
    const secondColorTiep2 = 25824; // Thêm mã màu 25824 để nhận diện nút Tiếp 2
    const colorDelta = 5000;       // Sai số màu cho phép
    let found = false;
    let scanY = 0;

    // Lưu lại giá trị y toàn cục trước khi sử dụng biến y trong vòng lặp
    let originalY = y;

    // Quét tìm nút Tiếp 2 trong khoảng từ y=600 đến y=800
    for (scanY = 600; scanY <= 800; scanY += 5) {
        for (let x = 354; x <= 400; x += 5) {
            let pixelColor = getColor(x, scanY)[0][0];
            // Kiểm tra nếu màu pixel khớp với một trong hai mã màu xác định
            if (Math.abs(pixelColor - targetColorTiep2) < colorDelta || pixelColor === secondColorTiep2) {
                toast(`✅ Đã tìm thấy nút Tiếp 2 tại (${x},${scanY})! Màu: ${pixelColor}`, "top", 2);
                //console.log(`✅ Đã tìm thấy nút Tiếp 2 tại (${x},${scanY})! Màu: ${pixelColor}`);
                touchDown(1, x, scanY);
                usleep(60000);
                touchUp(1, x, scanY);
                found = true;
                break;
            }
        }
        if (found) break;
    }

    // Khôi phục giá trị y toàn cục
    y = originalY;

    // Nếu không tìm thấy nút, thử click vào vị trí cố định
    if (!found) {
        toast("⚠️ Không tìm thấy nút Tiếp 2 theo màu, thử vị trí mặc định", "center", 2);
        touchDown(1, 377, 700); // Vị trí ước tính của nút Tiếp 2
        usleep(60000);
        touchUp(1, 377, 700);
    }

    // Chờ màn hình chuyển sau khi click
    usleep(1500000);

    let age = _ranbw(18, 30) + "";
    tapUntil(300, 300 + y, 630, 1280, [0], 30, 2); //click tuoi

    _gokytuN(age);

    usleep(1000000);
    _Click(378, 454 + y);

    tg = _currentTime();
    while (1) {
        if (_inArray(getColor(517, 809)[0][0], [32511, 31487])) break;
        usleep(1000000);
        if (_timeStart(tg) > 60) return 0;
    }

    usleep(1000000);
    _Click(517, 809); //ok
    let gt = 1;
    if (gt % 2 == 1) {
        iCheck = tapUntil(658, 405 + y, 658, 405 + y, [25824], 30);
        if (iCheck == 0) return 0;
    } else {
        iCheck = tapUntil(658, 515 + y, 658, 515 + y, [25824], 30);
        if (iCheck == 0) return 0;
    }
    _Click(385, 846 + y); //tiep    // Nếu đang ở giao diện Email thì chuyển sang giao diện số điện thoại
    _sleep(3);
    toast("Kiểm tra giao diện SĐT/Email...", "bottom", 2); if ((waitImage(imgEmailCuaBanLaGi, 2, "top") != 0) || (waitImage(imgEmailCuaBanLaGi1, 2, "top") != 0)) {
        toast("🎯 Màn hình Email -> SĐT", "top", 1);

        // Biến đánh dấu đã xử lý từng trường hợp - khai báo ở ngoài để truy cập được ở nhiều khối mã
        let case1Processed = false;
        let case2Processed = false;
        let case3Processed = false;

        // Trường hợp 1: Kiểm tra màu tại điểm ảnh di dong
        if (getColor(482, 870)[0][0] == 11580340 && getColor(488, 870)[0][0] == 8751499) {
            toast("✅ Nhận diện được giao diện theo điểm ảnh - Trường hợp 1", "center", 1);

            // Click ngay vào tọa độ 287,885 cho trường hợp 1 và không thực hiện bước tiếp theo
            toast("🖱️ Trường hợp 1: Click trực tiếp vào tọa độ (287,885)", "center", 1);
            _Click(287, 885);
            _sleep(1);

            // Kiểm tra xem đã chuyển sang màn hình SĐT chưa
            if ((waitImage(imgSoDiDongCuaBanLaGi, 2, "top") != 0) || (waitImage(imgSoDiDongCuaBanLaGi1, 2, "top") != 0)) {
                toast("✅ Đã chuyển sang màn hình SĐT thành công", "center", 1);
            } else {
                toast("⚠️ Chưa chuyển sang màn hình SĐT, có thể cần thêm thao tác", "center", 1);
            }

            // Đánh dấu đã xử lý trường hợp 1
            case1Processed = true;
        }
        // Trường hợp 2: Kiểm tra màu tại điểm ảnh chữ di động
        else if (getColor(484, 656)[0][0] === 11580340 && getColor(488, 656)[0][0] === 8751499) {
            toast("✅ Nhận diện được giao diện theo điểm ảnh - Trường hợp 2", "center", 1);

            // Click ngay vào tọa độ 375,665 cho trường hợp 2 và không thực hiện bước 2
            toast("🖱️ Trường hợp 2: Click trực tiếp vào tọa độ (375,665)", "center", 1);
            _Click(375, 665);
            _sleep(1);

            // Kiểm tra xem đã chuyển sang màn hình SĐT chưa
            if ((waitImage(imgSoDiDongCuaBanLaGi, 2, "top") != 0) || (waitImage(imgSoDiDongCuaBanLaGi1, 2, "top") != 0)) {
                toast("✅ Đã chuyển sang màn hình SĐT thành công", "center", 1);
            } else {
                toast("⚠️ Chưa chuyển sang màn hình SĐT, có thể cần thêm thao tác", "center", 1);
            }

            // Đánh dấu đã xử lý trường hợp 2
            case2Processed = true;
        }
        // Trường hợp 3: Kiểm tra màu tại điểm ảnh theo yêu cầu mới
        else if (getColor(484, 798)[0][0] === 11580340 && getColor(488, 798)[0][0] === 8751499) {
            toast("✅ Nhận diện được giao diện theo điểm ảnh - Trường hợp 3", "center", 1);

            // Click ngay vào tọa độ 375,810 cho trường hợp 3 và không thực hiện bước tiếp theo
            toast("🖱️ Trường hợp 3: Click trực tiếp vào tọa độ (375,810)", "center", 1);
            _Click(375, 810);
            _sleep(1);

            // Kiểm tra xem đã chuyển sang màn hình SĐT chưa
            if ((waitImage(imgSoDiDongCuaBanLaGi, 2, "top") != 0) || (waitImage(imgSoDiDongCuaBanLaGi1, 2, "top") != 0)) {
                toast("✅ Đã chuyển sang màn hình SĐT thành công", "center", 1);
            } else {
                toast("⚠️ Chưa chuyển sang màn hình SĐT, có thể cần thêm thao tác", "center", 1);
            }

            // Đánh dấu đã xử lý trường hợp 3
            case3Processed = true;
        }

        // Trường hợp mặc định: Nếu không khớp với bất kỳ trường hợp nào ở trên
        if (!case1Processed && !case2Processed && !case3Processed) {
            toast("⚠️ Không phát hiện được giao diện đã biết, thử phương án dự phòng", "center", 1);

            // Thử nhấn vào vị trí trung tâm có thể chứa nút "Sử dụng số điện thoại"
            _Click(375, 750);
            _sleep(1);

            // Kiểm tra xem đã chuyển sang màn hình SĐT chưa
            if ((waitImage(imgSoDiDongCuaBanLaGi, 2, "top") != 0) || (waitImage(imgSoDiDongCuaBanLaGi1, 2, "top") != 0)) {
                toast("✅ Đã chuyển sang màn hình SĐT thành công với phương án dự phòng", "center", 1);
            } else {
                toast("⚠️ Không thể chuyển sang màn hình SĐT, cần kiểm tra lại", "center", 1);
            }
        } else {
            toast("✓ Đã xử lý thành công một trong các trường hợp đã biết", "center", 1);
        }
        _sleep(1);
        usleep(2000000); // Chờ màn hình SĐT hiện ra
    }
    toast("Chuẩn bị nhập số điện thoại...", "center", 2);

    let phone = genPhone(dauso[intI]);

    // Click vào ô nhập số điện thoại trước khi nhập
    toast("👆 Click vào ô nhập số điện thoại", "center", 1);
    //58,163=5857122,54,183=9606808 nếu check ra màu này thì click 375,315 còn không check ra thì click 375,450
    let color51_239 = getColor(51, 239)[0][0];
    let color57_239 = getColor(57, 239)[0][0];
    let color46_161 = getColor(46, 161)[0][0];
    let color47_280 = getColor(47, 280)[0][0];
    let color300_560 = getColor(300, 560)[0][0]; // Thay thế tọa độ (239, 239) bằng (300, 560)
    // Chỉ thực hiện nếu chưa click vào ô nhập SĐT
    if (color51_239 === 660247 && color46_161 === 660247) {
        toast("🖱️ Click vào tọa độ (375, 450)", "top", 1);
        _Click(115, 450);
    }
    if (color51_239 === 660247 && color46_161 === 660247) {
        toast("🖱️ Click vào tọa độ (375, 450)", "top", 1);
        _Click(115, 515);
    }
    if (color57_239 === 660247 && color46_161 === 660247 && color47_280 === 660247) {
        toast("🖱️ Click vào nút Tiếp (375, 465)", "top", 1);
        _Click(375, 465);
    }
    if (color300_560 === 25824 && color46_161 === 660247) {
        toast("🖱️ Click vào tọa độ (375, 320)", "top", 1);
        _Click(115, 320);
    }

    usleep(800000); // Chờ bàn phím hiện ra

    // Nhập số điện thoại
    toast("⌨️ Nhập SĐT: " + phone, "top", 1);
    _gokytuP(phone);
    usleep(800000);

    // Click nút "Tiếp"
    //58,163=5857122,54,183=9606808 nếu check ra màu này thì click 375,560 còn không check ra thì click 375,700
    color51_239 = getColor(51, 239)[0][0];
    color57_239 = getColor(57, 239)[0][0];
    color46_161 = getColor(46, 161)[0][0];
    color47_280 = getColor(47, 280)[0][0];
    color300_560 = getColor(300, 560)[0][0]; // Cập nhật lấy màu tại tọa độ (300, 560)
    if (color51_239 === 660247 && color46_161 === 660247) {
        toast("🖱️ Click vào nút Tiếp (375, 700)", "top", 1);
        _Click(375, 700);
    }
    if (color51_239 === 1118482 && color46_161 === 1118482) {
        toast("🖱️ Click vào nút Tiếp (375, 700)", "top", 1);
        _Click(375, 700);
    }
    if (color51_239 === 660247 && color46_161 === 660247) {
        toast("🖱️ Click vào nút Tiếp (375, 760)", "top", 1);
        _Click(375, 760);
    }
    if (color57_239 === 660247 && color46_161 === 660247 && color47_280 === 660247) {
        toast("🖱️ Click vào nút Tiếp (375, 735)", "top", 1);
        _Click(375, 735);
    }
    if (color57_239 === 660247 && color46_161 === 660247 && color47_280 === 4278347) {
        toast("🖱️ Click vào nút Tiếp (375, 735)", "top", 1);
        _Click(375, 735);
    }
    if (color300_560 === 25824 && color46_161 === 660247) {
        toast("🖱️ Click vào nút Tiếp (375, 560)", "top", 1);
        _Click(375, 560);
    }

    _sleep(2);

    // Kiểm tra sau khi click nút tiếp
    let maxRetries = 15; // Số lần thử lại tối đa
    let retryCount = 0;

    let checkPhoneError = function () {
        try {
            // Lấy màu và chuyển đổi sang số nguyên để đảm bảo so sánh chính xác - trường hợp 1
            let colorResult1 = getColor(661, 446);
            let color661_446 = colorResult1[0][0];

            // Lấy màu và chuyển đổi sang số nguyên để đảm bảo so sánh chính xác - trường hợp 2 (thêm mới)
            let colorResult2 = getColor(661, 307);
            let color661_307 = colorResult2[0][0];

            // Log giá trị màu để debug
            //console.log("Màu tại (661,446): " + color661_446 + " (Loại dữ liệu: " + typeof color661_446 + ")");
            //console.log("So sánh với màu lỗi: " + 13832496 + " (Kết quả: " + (color661_446 === 13832496) + ")");

            //console.log("Màu tại (661,307): " + color661_307 + " (Loại dữ liệu: " + typeof color661_307 + ")");
            //console.log("So sánh với màu lỗi: " + 13832496 + " (Kết quả: " + (color661_307 === 13832496) + ")");

            // Lưu tọa độ click và xóa cho việc sử dụng sau này
            if (parseInt(color661_307) === 13832496) {
                // Nếu phát hiện lỗi ở tọa độ mới
                checkPhoneError.errorType = "new";
                //console.log("Phát hiện lỗi số điện thoại ở tọa độ mới (661,307)");
                return true;
            } else if (parseInt(color661_446) === 13832496) {
                // Nếu phát hiện lỗi ở tọa độ cũ
                checkPhoneError.errorType = "old";
                //console.log("Phát hiện lỗi số điện thoại ở tọa độ cũ (661,446)");
                return true;
            }

            // Không phát hiện lỗi ở cả hai trường hợp
            checkPhoneError.errorType = null;
            return false;
        } catch (e) {
            //console.log("Lỗi khi kiểm tra màu: " + e.message);
            checkPhoneError.errorType = null;
            return false;
        }
    };

    while (checkPhoneError() && retryCount < maxRetries) {
        retryCount++;
        toast("🔄 Phát hiện lỗi nhập số điện thoại, xóa và nhập lại (Lần " + retryCount + ")", "top", 1);

        // Kiểm tra loại lỗi và xử lý tương ứng
        if (checkPhoneError.errorType === "new") {
            // Trường hợp mới: click vào tọa độ (350,320) và xóa tại (662,308)
            toast("🖱️ Phát hiện lỗi tại tọa độ mới (661,307) - Click vào (350,320)", "top", 1);
            _Click(350, 320); // Click vào ô nhập phone (vị trí mới)
            _sleep(0.5);
            _Click(662, 308); // Click vào nút xoá số điện thoại (vị trí mới)
            _sleep(1);
        } else {
            // Trường hợp cũ: click vào tọa độ (350,450) và xóa tại (662,450)
            toast("🖱️ Phát hiện lỗi tại tọa độ cũ (661,446) - Click vào (350,450)", "top", 1);
            _Click(350, 450); // Click vào ô nhập phone (vị trí cũ)
            _sleep(0.5);
            _Click(662, 450); // Click vào nút xoá số điện thoại (vị trí cũ)
            _sleep(1);
        }

        // Chuyển sang đầu số tiếp theo (tuần tự)
        intI = (intI + 1) % dauso.length;
        phone = genPhone(dauso[intI]);
        toast("📱 Đổi sang đầu số mới: " + dauso[intI] + " → " + phone, "top", 2);
        // Nhập lại số điện thoại
        _gokytuP(phone);
        _sleep(1);

        // Lấy lại màu mới sau khi nhập
        toast("🔄 Kiểm tra lại màu nút Tiếp...", "top", 1);
        color51_239 = getColor(51, 239)[0][0];
        color57_239 = getColor(57, 239)[0][0];
        color46_161 = getColor(46, 161)[0][0];
        color47_280 = getColor(47, 280)[0][0];
        color300_560 = getColor(300, 560)[0][0]; // Cập nhật lấy màu tại tọa độ (300, 560)
        // Click lại nút tiếp với màu mới
        if (color51_239 === 660247 && color46_161 === 660247) {
            toast("🖱️ Click lại nút Tiếp (375, 700)", "top", 1);
            _Click(375, 700);
        }
        if (color51_239 === 1118482 && color46_161 === 1118482) {
            toast("🖱️ Click vào nút Tiếp (375, 700)", "top", 1);
            _Click(375, 700);
        }
        if (color51_239 === 660247 && color46_161 === 660247) {
            toast("🖱️ Click lại nút Tiếp (375, 760)", "top", 1);
            _Click(375, 760);
        }
        if (color57_239 === 660247 && color46_161 === 660247 && color47_280 === 660247) {
            toast("🖱️ Click vào nút Tiếp (375, 735)", "top", 1);
            _Click(375, 735);
        }
        if (color57_239 === 660247 && color46_161 === 660247 && color47_280 === 4278347) {
            toast("🖱️ Click vào nút Tiếp (375, 735)", "top", 1);
            _Click(375, 735);
        }
        if (color300_560 === 25824 && color46_161 === 660247) {
            toast("🖱️ Click lại nút Tiếp (375, 560)", "top", 1);
            _Click(375, 560);
        }

        _sleep(3); // Đợi để kiểm tra lại
    }

    if (retryCount >= maxRetries && checkPhoneError()) {
        toast("⚠️ Không thể giải quyết lỗi số điện thoại sau " + maxRetries + " lần thử", "center", 2);
    }

    _sleep(3);
    // Kiểm tra và xử lý bảng "Bạn cần hỗ trợ đăng nhập"
    toast("Kiểm tra bảng hỗ trợ đăng nhập...", "center", 1);

    let checkStart = _currentTime();
    while (_timeStart(checkStart) < 3) {
        if (_inArray(getColor(370, 915)[0][0], [16777215]) &&
            _inArray(getColor(348, 930)[0][0], [660247])) {
            toast("✅ Tìm thấy nút 'Tiếp tục tạo tài khoản'", "center", 1);
            _Click(370, 90);
            usleep(1000000);
            break;
        }
        usleep(500000);
    }

    // Thêm kiểm tra màn hình tạo mật khẩu
    _sleep(1); // Đợi màn hình chuyển sau khi click

    toast("🔍 Kiểm tra màn hình tạo mật khẩu...", "center", 1);
    let passwordScreenFound = false;

    // Kiểm tra màn hình theo điểm ảnh
    let color46_162 = getColor(46, 162)[0][0];

    // Kiểm tra trong 5 giây
    let passScreenCheck = _currentTime();
    while (_timeStart(passScreenCheck) < 5) {
        color46_162 = getColor(46, 162)[0][0];
        // Kiểm tra điểm ảnh 46,162=660247 và pixel trắng tại 375,400
        if (color46_162 === 660247 && _inArray(getColor(375, 400)[0][0], [16777215, 0xffffff])) {
            toast("✅ Đã tìm thấy màn hình tạo mật khẩu!", "center", 1);
            passwordScreenFound = true;
            break;
        }
        if (color46_162 === 1118482 && _inArray(getColor(375, 400)[0][0], [16777215, 0xffffff])) {
            toast("✅ Đã tìm thấy màn hình tạo mật khẩu!", "center", 1);
            passwordScreenFound = true;
            break;
        }
        usleep(500000);
    }
    // Nếu không tìm thấy màn hình tạo mật khẩu, return 0 (thất bại)
    if (!passwordScreenFound) {
        toast("❌ Không tìm thấy màn hình tạo mật khẩu sau khi click nút Tiếp tục", "center", 2);
        upSite(kho2); // Upload tài khoản die lên kho 2 (giả sử có biến kho2)
        fail1++; // Đếm fail ngay tại đây
        return -1; // Return -1 để báo hiệu đã đếm fail rồi
    }

    _waitPixel(375, 400, 16777215, 30);
    tapUntil(200, 400, 200, 400, [16777215], 2, 1);
    _sleep(1);
    passToSave = myPassword + _randPass(4);
    _gokytu(passToSave);

    // --- LOGIC MỚI: CLICK VÀ KIỂM TRA THEO TỪNG BƯỚC ---
    const fbColors = [6254205, 13423579, 14541544, 660247, 6122619];
    let clickedYs = [];
    const scanStartY = 400;
    const scanEndY = 1230;
    const scanStep = 15;

    // Hàm phụ để quét và click
    function findAndClickBlueButton(excludeYs) {
        for (let yCoord = scanStartY; yCoord <= scanEndY; yCoord += scanStep) {
            if (_gcl(120, yCoord) === 25824 && _gcl(650, yCoord) === 25824 && !excludeYs.includes(yCoord)) {
                _Click(375, yCoord);
                return yCoord;
            }
        }
        return -1;
    }

    // *** HÀM CHECKSUCCESS ĐÃ ĐƯỢC CẬP NHẬT ***
    function checkSuccess() {
        appActivate(bdlFace);
        return (
            // Điều kiện check màu
            (_inArray(getColor(129, 391)[0][0], fbColors) && _inArray(getColor(143, 663)[0][0], fbColors)) ||
            (_inArray(getColor(89, 510)[0][0], fbColors) && _inArray(getColor(68, 451)[0][0], fbColors)) ||
            (_inArray(getColor(33, 398)[0][0], fbColors) && _inArray(getColor(173, 400)[0][0], fbColors)) ||
            (waitImage(imgKhongGuiLaiMa, 1, "top") != 0) ||
            (waitImage(imgGuiLaiMa, 1, "top") != 0) ||
            (waitImage(imgNhapMaXacNhan, 1, "top") != 0)
        );
    }
    // Lần 1: Chắc chắn có
    toast("Click lần 1 (Lưu)...", "top", 1);
    let y1 = findAndClickBlueButton(clickedYs);
    if (y1 === -1) { toast("Lỗi: Không tìm thấy nút xanh lần 1", "top", 2); return 0; }
    tapUntil(120, y1, 650, y1, [25824], 2, 1);
    _sleep(5);

    // Lần 2: Chắc chắn có
    toast("Click lần 2 (OK/Tiếp)...", "top", 1);
    let y2 = findAndClickBlueButton(clickedYs);
    if (y2 === -1) { toast("Lỗi: Không tìm thấy nút xanh lần 2", "top", 2); return 0; }
    tapUntil(120, y2, 650, y2, [25824], 2, 1);
    _sleep(5);

    // --- LOGIC MỚI: TỪ LẦN 3 ĐẾN 7, DÙNG VÒNG LẶP ---
    const totalClicksAfterInitial = 7;
    const delayBetweenClicks = 5;
    let uploaded = false; // Flag để tránh trùng lặp upload
    let failCounted = false; // Flag để tránh trùng lặp đếm fail

    for (let i = 3; i <= totalClicksAfterInitial; i++) {
        toast(`Check/Click lần ${i}...`, "top", 1);

        // YÊU CẦU MỚI: Ưu tiên kiểm tra _checkDie
        if (_checkDie(10) === 1) {
            toast(`❌ Thất bại: Phát hiện màn hình DIE (lần ${i})`, "center", 2);
            if (!failCounted) {
                upSite(kho2);
                fail1++;
                failCounted = true;
            }
            return -1; // Return -1 để báo hiệu đã đếm fail rồi
        }
        // Kiểm tra điểm ảnh đặc biệt 499,1250=2438719
        if (_gcl(499, 1250) === 2438719) {
            toast(`❌ Thất bại: Phát hiện điểm ảnh 499,1250=2438719 (lần ${i})`, "center", 2);
            if (!failCounted) {
                upSite(kho2);
                fail1++;
                failCounted = true;
            }
            return -1; // Return -1 để báo hiệu đã đếm fail rồi
        }
        // Kiểm tra màn hình "Trợ giúp" (thất bại ngay lập tức)
        if (waitImage(imgTroGiup, 1, 'center') != 0) {
            toast(`❌ Thất bại: Gặp màn hình Trợ giúp (lần ${i})`, "center", 2);
            if (!failCounted) {
                upSite(kho2);
                fail1++;
                failCounted = true;
            }
            return -1; // Return -1 để báo hiệu đã đếm fail rồi
        }

        // Kiểm tra thành công để vào màn hình nhập code
        if (checkSuccess()) {
            toast(`✅ Thành công sau lần click thứ ${i - 1}!`, "top", 2);
            if (!uploaded) {
                upSite(kho1); // Upload tài khoản lên kho 1 (thành công) - chỉ 1 lần
                success1++; // Chỉ đếm thành công 1 lần duy nhất
                uploaded = true;
            }
            return 1; // Trả về 1 để hàm fix1() tiếp tục
        }

        // Nếu chưa thành công, click tiếp
        let y = findAndClickBlueButton(clickedYs);
        if (y !== -1) {
            clickedYs.push(y);
        } else {
            toast(`⚠️ Không tìm thấy nút xanh ở lần ${i}, kiểm tra ở bước tiếp theo.`, "top", 1);
        }

        // THÊM MỚI: Tắt mở FB và check success (chỉ từ lần 5 trở đi)
        if (i >= 5) {
            toast(`🔄 Tắt mở FB và check success (lần ${i})...`, "center", 2);
            _closeFb(strMode);
            _sleep(2);
            openFb(1, strMode);
            _sleep(2);

            if (checkSuccess()) {
                toast(`✅ Thành công sau khi tắt mở FB (lần ${i})!`, "top", 2);
                if (!uploaded) {
                    upSite(kho1);
                    success1++;
                    uploaded = true;
                }
                return 1;
            }
        }

        _sleep(delayBetweenClicks);
    }

    // Kiểm tra lần cuối cùng sau khi đã click hết (chỉ khi chưa upload)
    if (!uploaded) {
        toast("Kiểm tra lần cuối cùng...", "center", 1);
        if (checkSuccess()) {
            toast("✅ Thành công sau tất cả các lần click!", "center", 2);
            upSite(kho1); // Upload tài khoản lên kho 1 (thành công)
            success1++; // Chỉ đếm khi thực sự thành công và chưa upload
            return 1;
        }
    }

    // Nếu tất cả các bước trên đều không thành công
    if (!failCounted) {
        toast("❌ Không vào được màn hình nhập mã. Upload die.", "center", 3);
        upSite(kho2); // Upload tài khoản die lên kho 2
        fail1++;
    }
    return -1; // Return -1 để báo hiệu đã đếm fail rồi
}

function _inArray(intI, arrCheck) {
    let kq = false;
    for (let i = 0; i < arrCheck.length; i++) {
        if (intI === arrCheck[i]) return true;
    }
    return kq;
}

function _sleep(intSec, line = "") {
    for (let i = 0; i < intSec; i++) {
        toast("Sleeping..." + line + " : " + i + "/" + intSec, 1);
        usleep(1000000);
    }
}
function _watchVideo(intTime) {
    openURL("fb://notifications");
    _sleep(3);
    _Click(357, 269);
    _sleep(2);

    openURL("fb://feed");
    swiDown();
    _sleep(5);
    swiDown();
    _sleep(3);

    openURL("fb://watch/");
    _sleep(3);
    _Click(300, 500);
    let tg = _currentTime();
    while (1) {
        swiUp();
        _sleep(_ranbw(60, 120));
        if (_timeStart(tg) > intTime) return;
    }

    swiUp();
    _sleep(_ranbw(15, 30));
}

function getOption(intTime) {
    let tg = _currentTime();

    while (1) {
        toast("GetOption : " + _timeStart(tg) + "/" + intTime, 1);
        //13109800, 13176364,6122619,14541544
        if (
            _inArray(
                getColor(366, 350 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 351 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 390 + y)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 1;
        if (
            _inArray(
                getColor(366, 414)[0][0],
                [13357785, 6781066, 13109800, 13176364, 6122619, 14541544]
            )
        )
            return 2;
        usleep(500000);

        if (_timeStart(tg) > intTime) return 0;
    }
}

function log(s) {
    console.log(s);
}
function _checkDie(intTime) {
    let iCheck = 0;
    let tg = _currentTime();
    while (1) {

        if (_inArray(_gcl(268, 840), [6844016]) && // đây có phải tài khoản của bạn không 1 dòng
            _inArray(_gcl(281, 842), [11317169]) &&
            _inArray(_gcl(279, 843), [4475726])) {
            _Click(375, 850);
            _sleep(1);
            continue;
        }
        if (_inArray(_gcl(220, 597), [2699572]) && //bạn đã có tài khoản fb chưa 
            _inArray(_gcl(213, 606), [5330778]) &&
            _inArray(_gcl(217, 616), [4607055])) {
            _Click(375, 605);
            _sleep(1);
            continue;
        }
        // Kiểm tra màn hình "Có thể bạn đã tạo tài khoản Facebook rồi" (có thể click và tiếp tục)
        if (getColor(240, 175)[0][0] == 16777215 && getColor(355, 172)[0][0] == 660247 && getColor(643, 522)[0][0] == 6122619) {
            toast("⚠️ Phát hiện màn hình 'Có thể bạn đã tạo tài khoản rồi 1 dòng'", "bottom", 2);
            if (intLog == 1) log('S1 - Click chọn tài khoản khác và tiếp tục');
            // Click trực tiếp vào "Chọn tài khoản khác"
            _Click(355, 740);
            _sleep(2);
            continue; // Tiếp tục kiểm tra sau khi click
        }
        // Kiểm tra màn hình "Có thể bạn đã tạo tài khoản Facebook rồi" (có thể click và tiếp tục) 
        if (getColor(240, 175)[0][0] == 16777215 && getColor(355, 172)[0][0] == 660247 && getColor(367, 1057)[0][0] == 7633275) {
            toast("⚠️ Phát hiện màn hình 'Có thể bạn đã tạo tài khoản rồi 3 dòng'", "bottom", 2);
            if (intLog == 1) log('S1.1 - Click chọn tài khoản khác và tiếp tục');
            // Click trực tiếp vào "Chọn tài khoản khác"
            _Click(355, 1055);
            _sleep(2);
            continue; // Tiếp tục kiểm tra sau khi click
        }
        // Kiểm tra màn hình "Có thể bạn đã tạo tài khoản Facebook rồi" (có thể click và tiếp tục) 
        if (getColor(240, 175)[0][0] == 16777215 && getColor(355, 172)[0][0] == 660247 && getColor(643, 522)[0][0] == 16777215) {
            toast("⚠️ Phát hiện màn hình 'Có thể bạn đã tạo tài khoản rồi 2 dòng'", "bottom", 2);
            if (intLog == 1) log('S1.1 - Click chọn tài khoản khác và tiếp tục');
            // Click trực tiếp vào "Chọn tài khoản khác"
            _Click(355, 890);
            _Click(355, 750);
            _Click(375, 450);
            _Click(375, 1111);
            _sleep(2);
            continue; // Tiếp tục kiểm tra sau khi click
        }

        // Kiểm tra màn hình "đây có phải là tk của bạn không" (có thể click và tiếp tục)
        if (getColor(107, 411)[0][0] == 14541544 && getColor(65, 179)[0][0] == 8488584 && getColor(227, 845)[0][0] == 6909809) {
            toast("⚠️ Phát hiện màn hình 'Có thể bạn đã tạo tài khoản rồi 1 dòng'", "bottom", 2);
            if (intLog == 1) log('S1 - Click chọn tài khoản khác và tiếp tục');
            // Click trực tiếp vào "không, tạo tài khoản mới"
            _Click(355, 851);
            _sleep(2);
            continue; // Tiếp tục kiểm tra sau khi click
        }
        // Kiểm tra màn hình "đây có phải là tk của bạn không" (có thể click và tiếp tục)
        if (getColor(107, 411)[0][0] == 16777214 && getColor(65, 179)[0][0] == 660247 && getColor(227, 845)[0][0] == 16777215) {
            toast("⚠️ Phát hiện màn hình 'Có thể bạn đã tạo tài khoản rồi 2 dòng'", "bottom", 2);
            if (intLog == 1) log('S1 - Click chọn tài khoản khác và tiếp tục');
            // Click trực tiếp vào "không, tạo tài khoản mới"
            _Click(355, 1040);
            _Click(375, 450);
            _Click(375, 1111);
            _sleep(2);
            continue; // Tiếp tục kiểm tra sau khi click
        }

        // Kiểm tra màn hình "Tìm tài khoản khác?" (có thể click và tiếp tục)
        if (getColor(240, 170)[0][0] == 660247 && getColor(209, 173)[0][0] == 11054253 && getColor(180, 431)[0][0] == 4032998) {
            toast("⚠️ Phát hiện màn hình 'Tìm tài khoản khác'", "bottom", 2);
            if (intLog == 1) log('S2 - Click tìm tài khoản và tiếp tục');
            // Click trực tiếp vào "không, tạo tài khoản mới"
            _Click(375, 544);
            _sleep(2);
            return 0; // Không thể tiếp tục, return luôn
        }
        // Kiểm tra màn hình "Tìm tài khoản khác 2 ?" (có thể click và tiếp tục)
        if (getColor(240, 170)[0][0] == 1515556 && getColor(209, 173)[0][0] == 16448250 && getColor(180, 431)[0][0] == 16777215) {
            toast("⚠️ Phát hiện màn hình 'Tìm tài khoản khác'", "bottom", 2);
            if (intLog == 1) log('S3 - Click tìm tài khoản và tiếp tục');
            // Click trực tiếp vào "không, tạo tài khoản mới"
            _Click(375, 599);
            _sleep(2);
            return 0; // Không thể tiếp tục, return luôn
        }
        // Kiểm tra màn hình "Tìm tài khoản khác 3 ?" (có thể click và tiếp tục)
        if (getColor(240, 170)[0][0] == 660247 && getColor(209, 173)[0][0] == 11054253) {
            toast("⚠️ Phát hiện màn hình 'Tìm tài khoản khác'", "bottom", 2);
            if (intLog == 1) log('S2 - Click tìm tài khoản và tiếp tục');
            // Click trực tiếp vào "không, tạo tài khoản mới"
            _Click(375, 544);
            _sleep(2);
            return 0; // Không thể tiếp tục, return luôn
        }
        // Kiểm tra màn hình "Tìm tài khoản khác 2 ?" nhưng bị chặn đăng kí (có thể click và tiếp tục)
        if (getColor(127, 1229)[0][0] == 2438719 && getColor(69, 1246)[0][0] == 16777215 && getColor(650, 1245)[0][0] == 3963825) {
            toast("⚠️ Phát hiện màn hình 'không thể tạo tài khoản'", "bottom", 2);
            return 0; // Không thể tạo tài khoản, return luôn
        }

        usleep(500000);
        if (_timeStart(tg) > intTime) return 2;
    }
}

// doan nay them o s6 
function _vaoNewsfeed() {
    // Ví dụ: điểm góc trái hoặc biểu tượng newsfeed
    // Điều kiện có thể điều chỉnh tùy theo thực tế thiết bị của bạn
    let mau1 = getColor(148, 90)[0][0];
    let mau2 = getColor(172, 90)[0][0];

    // Nếu đã vào Facebook newsfeed thường có màu đặc trưng là 550655
    return _inArray(550655, [mau1, mau2]);
}

function genPhone(strDauso) {
    let x = "123456789";

    let lenP = 10;
    if (strDauso.slice(0, 3) == "+84") lenP = 12;
    if (strDauso.slice(0, 3) == "+96") lenP = 11;
    if (strDauso.slice(0, 2) == "+1") lenP = 12;
    if (strDauso.slice(0, 3) == "+62") lenP = 11;

    strDauso.lastIndexOf();
    while (strDauso.length < lenP) {
        strDauso += x[_ranInt(x.length - 1)];
    }

    if (intLog == 1) console.log(strDauso);
    return strDauso;
}

function _ranbw(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function _ranInt(intN) {
    return Math.floor(Math.random() * intN);
}
function _timeStart(intStar) {
    let curentTime = new Date().getTime();
    return Math.floor((curentTime - intStar) / 1000);
}

function waitImage(pathImage, intTime, vitri) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95,
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (_timeStart(tg) < intTime) {
        if (intToast == 1) toast("Waitimage : " + _timeStart(tg) + "/" + intTime, vitri, 1);

        [result, error] = findImage(opt);

        // KIỂM TRA KẾT QUẢ MỘT CÁCH AN TOÀN
        if (result && result.length > 0 && result[0] && typeof result[0].y === 'number') {
            return result[0].y; // Trả về tọa độ Y nếu tìm thấy
        }

        usleep(500000); // Chờ 0.5 giây rồi thử lại
    }
    return 0; // Trả về 0 nếu hết thời gian mà không tìm thấy
}
function imgClick(pathImage, intTime, strMess) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.90, // OPTIONAL, default is 0.9
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast(
                "imgClick : " + strMess + _timeStart(tg) + "/" + intTime,
                "top",
                1
            );
        [result, error] = findImage(opt);
        if (result && result.length > 0) {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function imgClickRg(pathImage, intTime, strMess, region) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95, // OPTIONAL, default is 0.9
        region: region,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast(
                "imgClick : " + strMess + _timeStart(tg) + "/" + intTime,
                "top",
                1
            );
        [result, error] = findImage(opt);
        if (result && result.length > 0) {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}
function imgClickTop(pathImage, intTime, strMess) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.9, // OPTIONAL, default is 0.9
        region: null,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast("imgClick : " + strMess + _timeStart(tg) + "/" + intTime, "top", 1);
        [result, error] = findImage(opt);
        if (result && result.length > 0) {
            //usleep(1000000);
            _Click(result[0].x, result[0].y);
            return 1;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function waitImageB(pathImage, intTime, vitri, vung) {
    let tg = _currentTime();
    const opt = {
        targetImagePath: pathImage,
        count: 1,
        threshold: 0.95, // OPTIONAL, default is 0.9
        region: vung,
        debug: false,
        method: 1,
    };
    let [result, error] = [[], null];

    while (1) {
        if (intToast == 1)
            toast("Waitimage : " + _timeStart(tg) + "/" + intTime, vitri, 1);
        [result, error] = findImage(opt);
        if (result && result.length > 0) {
            //usleep(1000000);
            return result[0].y;
        }
        usleep(300000);
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _readFileLine(pathFile, line) {
    let [ketqua, loi] = fs.readFile(pathFile);
    let arrData;
    if (ketqua.lastIndexOf("\r\n") >= 0) arrData = ketqua.split("\r\n");
    else arrData = ketqua.split("\n");
    return arrData[line - 1];
}

function _waitPixel(intX, intY, intColor, intTime) {
    let time = 0;
    let [ketqua, loi] = [[], null];
    while (1) {
        toast("Time : " + time + "/" + intTime, 1);
        [ketqua, loi] = getColor(intX, intY); //lấy mã màu
        if (intLog == 1) console.log(intX + " " + intY + " : " + ketqua[0]);
        if (ketqua[0] == intColor) return 1;
        time++;
        usleep(1000000);
        //toast('Đang tìm kiếm ' + time + ' s',1)
        if (time > intTime) return 0; //Thất bại
    }
}

function _waitPixelArr(intX, intY, arrColor, intTime) {
    let time = 0;
    let c;
    while (1) {
        toast("Time : " + time + "/" + intTime, 1);

        c = getColor(intX, intY)[0][0];
        if (intLog == 1) console.log(c);
        if (_inArray(c, arrColor)) return 1;
        time++;
        usleep(1000000);
        //toast('Đang tìm kiếm ' + time + ' s',1)
        if (time > intTime) return 0; //Thất bại
    }
}

function _Click(intX, intY) {
    touchDown(1, intX, intY);
    usleep(60000);
    touchUp(1, intX, intY);
    if (intLog == 1) console.log("Click : " + intX + " : " + intY);
    usleep(1000000);
}

function _gclick(intX, intY) {
    touchDown(1, intX, intY);
    usleep(60000);
    touchUp(1, intX, intY);
    if (intLog == 1) console.log("Click : " + intX + " : " + intY);
    usleep(80000);
}

function _pressHome() {
    keyDown(KEY_TYPE.HOME_BUTTON);
    usleep(80000);
    keyUp(KEY_TYPE.HOME_BUTTON);
}

function _fileCountLine(pathFile) {
    let [ketqua, loi] = fs.readFile(pathFile);
    let arrData = ketqua.split("\n");
    return arrData.length;
}

function swiUp() {
    touchDown(6, 451.61, 977.84);
    usleep(17669.67);
    touchMove(6, 448.53, 944.26);
    usleep(16625.38);
    touchMove(6, 448.53, 888.26);
    usleep(16687.5);
    touchMove(6, 451.61, 800.69);
    usleep(16680.12);
    touchMove(6, 465.98, 686.66);
    usleep(16506.25);
    touchMove(6, 487.53, 568.56);
    usleep(16785.75);
    touchMove(6, 525.51, 436.21);
    usleep(16755.29);
    touchMove(6, 589.15, 294.68);
    usleep(15234.71);
    touchUp(6, 593.25, 290.61);
}

function _closeSettings() { // ĐÃ ĐỔI TÊN TỪ _closeMail
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);
    let dem = 0;
    while (at.appState("com.apple.Preferences") != "NOT RUNNING") {
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    _pressHome();
    usleep(1000000);
}

function _closeCcinfo() {
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);

    let dem = 0;
    while (at.appState("com.ccteam.ccinfo") != "NOT RUNNING") {
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    _pressHome();
    usleep(1000000);
}

function _closeFb(strMode) {
    _pressHome();
    usleep(120000);
    _pressHome();
    usleep(500000);
    let dem = 0;
    while (at.appState(bdlFace) != "NOT RUNNING") {
        //console.log(appState(bdlFace));
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }
    dem = 0;
    //com.facebook.Messenger
    while (at.appState("com.facebook.Messenger") != "NOT RUNNING") {
        //console.log(appState(bdlFace));
        swiUp();
        dem++;
        if (dem > 5) break;
        usleep(1500000);
    }

    dem = 0;
    if (strMode == "proxy") {
        while (at.appState(bdlSha) != "NOT RUNNING") {
            //console.log(appState(bdlSha))
            swiUp();
            dem++;
            usleep(1500000);
        }
    }
    _pressHome();
    usleep(1000000);
}

function delAllRss() {
    _Click(370, 1280);
    usleep(51249.33);
    _Click(90, 85);
    usleep(51249.33);
    _Click(90, 85);
    usleep(51249.33);
    _Click(550, 85);
    usleep(51249.33);
    _Click(510, 770);
    usleep(101249.33);
    _Click(660, 90);
    usleep(51249.33);
    _Click(120, 1280);
    _Click(120, 1280);
    usleep(2631836.92);
}
function updateRss(strMode) {
    let iCheck = 0;
    let data = ""; while (1) {
        // Lấy data RSS từ Google Sheet
        while (1) {
            lineAcc++;
            if (lineAcc > 10) lineAcc = 1;
            data = getRss(lineAcc + 2, col);
            console.log(data);
            if (data != "") break;
        }

        // Cập nhật vị trí hiện tại vào Excel
        updateVitri(row, 5, lineAcc);
        toast("Đã cập nhật vị trí: " + lineAcc, "center", 2);

        // BƯỚC 1: Đăng nhập và chờ "mù"
        _logFace(data.split("|")[0], data.split("|")[1]);

        // BƯỚC 2: Tắt và mở lại App
        _closeFb("4G");
        appActivate(bdlFace);
        toast("Chờ 5 giây để kiểm tra trạng thái...", "center", 2); _sleep(5);
        // BƯỚC 3: Kiểm tra giao diện
        toast("Kiểm tra giao diện...", "center", 1);
        // Ưu tiên kiểm tra: checkpoint (đình chỉ) -> mã xác nhận -> nút 3 gạch (LIVE) -> màn hình trắng (DIE) -> trường hợp khác
        if (waitImage(imgTroGiup, 1, "center") != 0 ||
            waitImage(imgTroGiup, 1, "center") != 0) {
            toast("⚠️ Tài khoản bị đình chỉ hoặc cần xác nhận!", "bottom", 1);
            iCheck = 282;
        } else if (((waitImage(imgKhongGuiLaiMa, 1, "top") != 0) ||
            (waitImage(imgGuiLaiMa, 1, "top") != 0) ||
            (waitImage(imgNhapMaXacNhan, 1, "top") != 0))) {
            toast("⚠️ Yêu cầu nhập mã xác nhận!", "bottom", 1);
            iCheck = 283;
        } else if (_inArray(getColor(23, 1319)[0][0], [747775, 550655])) {
            toast("✅ Live!", "bottom", 1);
            iCheck = 2;
        } else if (waitImage(imgTaoTaiKhoanMoi, 1, "center") != 0) {
            toast("⚠️ Màn hình trắng!", "bottom", 1);
            iCheck = 998;
        } else {
            iCheck = _checkLogin(10);
        }

        // Nếu đã xác định được trạng thái (thành công, lỗi, trắng...) thì thoát vòng lặp
        if (iCheck !== 0) {
            break;
        }

        // Nếu không nhận dạng được gì, reset và thử lại
        toast("Không nhận dạng được trạng thái, reset...", "center", 2);
        _reset(strMode);
    }

    // === BƯỚC 4: XỬ LÝ SAU KHI CÓ KẾT QUẢ ===

    // Trường hợp ĐẶC BIỆT: Màn hình trắng, đi thẳng tới backup, không làm gì khác
    if (iCheck == 998) {
        toast("⚠️ Login trắng, chuyển thẳng qua CCInfo!", "center", 3);
        // Script sẽ không làm gì ở đây và đi thẳng xuống phần backup chung
    }
    // Các trường hợp đăng xuất khác
    else if (iCheck == 1) {
        console.log("dang xuat 1");
        _Click(43, 92); _sleep(2); swiUp(); _sleep(2);
        _Click(385, 1265); _sleep(1);
        _Click(513, 805); _sleep(2);
        _Click(515, 771); _sleep(2);
        _clickTaoTaiKhoanNeuCan();
    }
    else if (iCheck == 2) {
        console.log("dang xuat 2");
        tapUntil(691, 1293, 690, 1320, [16777215, 14079702], 6);
        _sleep(2); swiUp(); _sleep(2);
        _Click(385, 1175); _sleep(1);
        _Click(513, 805); _sleep(2);
        _Click(515, 771); _sleep(2);
    }
    else if (iCheck == 282) {
        console.log("dang xuat 282");
        tapUntil(660, 85, 322, 82, [0, 526345], 3);
        tapUntil(220, 450, 530, 867, [31487], 3);
        tapUntil(520, 850, 370, 178, [550655], 3);
        usleep(1000000);
    }
    else if (iCheck == 283) {
        console.log("dang xuat nvr");
        _Click(55, 90); usleep(1000000);
        _Click(250, 823); usleep(1000000);
        _sleep(2);
    }
    else if (iCheck == 2822) {
        console.log("dang xuat 2822 ");
        tapUntil(660, 85, 322, 82, [0, 526345], 3);
        tapUntil(220, 450, 530, 867, [31487], 3);
        tapUntil(520, 850, 370, 178, [550655], 3);
        usleep(1000000);
    }
    else if (iCheck == 3) {
        console.log("dang xuat 3");
        _Click(370, 703); _sleep(2);
        _Click(385, 844); _sleep(2);
        _Click(260, 771); _sleep(2);
    }

    // === LUỒNG BACKUP CCINFO CHUNG CHO MỌI TRƯỜNG HỢP ===
    appRun("com.ccteam.ccinfo");
    usleep(2000000);
    iCheck = _waitPixel(366, 291, 6112720, 30);

    _Click(209, 833); //Back up
    let tg = _currentTime();
    while (1) {
        _sleep(1);
        if (_inArray(_gcl(381, 833), [31487])) _Click(373, 832);
        if (_timeStart(tg) > 7) break;
    }

    iCheck = tapUntil(375, 1280, 372, 1320, [31487], 30, 2);
    if (iCheck == 0) return 0;

    tg = _currentTime();
    while (1) {
        usleep(500000);
        if (getColor(695, 307)[0][0] == 15329771) {
            _Click(695, 307);
            _sleep(1);
        }
        if (getColor(639, 307)[0][0] == 3458905) break;
        if (_timeStart(tg) > 10) return 0;
    }
    _Click(129, 1279); //Home ccinfo
    _sleep(1);
}

function pickRss() {
    appRun("com.ccteam.ccinfo");
    usleep(2000000);
    _waitPixel(366, 291, 6112720, 30);
    let back = 0;
    if (success1 >= success || fail1 >= fail) {
        success1 = 0;
        fail1 = 0;

        // Reset 4G trước khi đổi RSS
        toast("🔄 Đạt ngưỡng - Reset 4G trước khi đổi RSS", "center", 2);
        _reset("4G");

        _Click(375, 1280);
        _sleep(1);
        delAllRss();
        updateRss("4G");
        back = 1;
    }
    if (back == 1) {
        appActivate("com.ccteam.ccinfo");
        usleep(1000000);
        _Click(400, 350);
        _sleep(10);
    }

    _Click(543, 823); //Restore
    _sleep(5);
}

function _reset(strMode) {
    let iCheck;
    toast("Clear data and fake device", 5);

    _closeFb(strMode);
    _closeCcinfo();

    if (getColor(375, 721)[0][0] === 11776692 && getColor(382, 765)[0][0] === 31487 && getColor(373, 765)[0][0] === 31487) {
        toast("Phát hiện thông báo hệ thống, đang xử lý...", "center", 1);
        _Click(375, 765); usleep(1000000);
    }

    console.log("🔄 [_RESET] Bắt đầu mở CCinfo và change device...");
    
    // Thử tối đa 3 lần: mở CCinfo → change device
    let resetRetries = 0;
    let maxResetRetries = 3;
    
    while (resetRetries < maxResetRetries) {
        console.log(`🔄 [_RESET] Lần thử #${resetRetries + 1}/${maxResetRetries}`);
        
        // Mở CCinfo
        let tg = _currentTime();
        let ccinfoOpened = false;
        while (_timeStart(tg) < 30) {
            appRun("com.ccteam.ccinfo");
            iCheck = _waitPixel(366, 291, 6112720, 5);
            if (iCheck) {
                ccinfoOpened = true;
                break;
            }
        }
        
        if (!ccinfoOpened) {
            console.log("❌ [_RESET] Không thể mở CCinfo sau 30s");
            toast("❌ Không thể mở CCinfo", "center", 2);
            return 0;
        }
        
        console.log("✅ [_RESET] CCinfo đã mở, gọi changer()...");
        
        // Reset counter và gọi changer
        changerAttempts = 0;
        let changerResult = changer();
        
        if (changerResult) {
            // Change thành công
            console.log("✅ [_RESET] Change device thành công!");
            break;
        } else {
            // Change thất bại
            console.log(`⚠️ [_RESET] Change thất bại lần ${resetRetries + 1}, đóng CCinfo và thử lại...`);
            toast(`⚠️ Change thất bại, thử lại ${resetRetries + 1}/${maxResetRetries}`, "center", 2);
            
            _closeCcinfo();
            usleep(1000000); // Chờ 2 giây
            
            resetRetries++;
        }
    }
    
    // Kiểm tra kết quả cuối cùng
    if (resetRetries >= maxResetRetries) {
        console.log("❌ [_RESET] Thất bại sau 3 lần thử, return 0");
        toast("❌ Change device thất bại hoàn toàn", "center", 3);
        return 0;
    }
    
    console.log("✅ [_RESET] Changer thành công, click nút Restore...");
    _sleep(3);
    
    // Click nút Restore
    console.log("📦 [_RESET] Click nút Restore tại (543, 823)");
    _Click(543, 823); // Nút Restore
    toast("📦 Đang restore...", "center", 2);
    _sleep(5); // Đợi 5 giây
    
    console.log("✅ [_RESET] Hoàn tất reset - CCinfo đã change device & restore");
    return 1;
}

function _currentTime() {
    let now = new Date();
    return Math.floor(now.getTime() / 1000);
}

// ========== HÀM CHANGER - TỰ ĐỘNG RETRY KHI CHANGE DEVICE ==========
let changerAttempts = 0;

function changer() {
    console.log("🔧 [CHANGER] Bắt đầu change device, attempt #" + changerAttempts);
    toast("Changer...", "center", 1);
    usleep(1000000); // Chờ 1 giây
    
    // Chạy lệnh ccinfo -changer
    let command = "ccinfo -changer";
    console.log("🔧 [CHANGER] Executing: " + command);
    let result = exec(command);
    
    console.log("🔧 [CHANGER] Result: " + result);
    
    // Kiểm tra kết quả có chứa "Success"
    if (result && result.indexOf("Success") !== -1) {
        console.log("✅ [CHANGER] Change device thành công!");
        toast("✅ " + result, "center", 2);
        changerAttempts = 0; // Reset attempts
        return true; // Thành công
    } else {
        console.log("⚠️ [CHANGER] Change device thất bại, retry #" + changerAttempts);
        usleep(1000000); // Chờ 1 giây trước khi retry
        
        if (changerAttempts > 2) {
            // Đã thử quá 3 lần -> return false
            console.log("❌ [CHANGER] Đã thử 3 lần, thất bại hoàn toàn!");
            toast("❌ Change device thất bại sau 3 lần thử", "center", 3);
            return false; // Thất bại
        } else {
            // Thử lại
            changerAttempts++;
            console.log("🔄 [CHANGER] Retry lần " + changerAttempts + "/3...");
            toast("🔄 Change device retry " + changerAttempts + "/3", "center", 1);
            return changer(); // Gọi đệ quy
        }
    }
}

function _currentTime() {
    return new Date().getTime();
}

function openFb(intTry) {
    while (intTry > 0) {
        appRun(bdlFace);
        _sleep(3);
        let tg = _currentTime();

        // Chờ một dấu hiệu cực kỳ chung chung là app đã mở và không bị crash
        // Ví dụ: chờ thanh trạng thái của iOS xuất hiện (màu trắng ở trên cùng)
        while (_timeStart(tg) < 30) {
            if (_inArray(_gcl(203, 978), [16777215, 25824])) { // Kiểm tra một pixel trắng ở thanh trạng thái
                toast("✅ App Facebook đã mở.", "center", 2);
                return 1; // Coi như app đã mở thành công
            }
            _sleep(1);
        }

        // Nếu sau 15s không thành công
        intTry--;
        toast(`Mở FB thất bại, đóng và thử lại... (${intTry} lần)`, "center", 2);
        _closeFb(mode);
    }

    toast("❌ Không thể mở được Facebook.", "center", 3);
    return 0;
}

function _clickTaoTaiKhoanNeuCan() {
    let found = waitImage(imgTaoTaiKhoanMoi, 2, "top");
    if (found) {
        toast("✅ Nhấn vào 'Tạo tài khoản mới'", "top", 2);
        _Click(400, 1170);
        usleep(2000000);
        return 1;
    }
    return 0;
}

function tapUntil(x, y, x1, y1, arrC, intTime, intSleep) {
    let tg = _currentTime();
    while (1) {
        toast("TapUntil " + _timeStart(tg) + "/" + intTime, 1);
        _Click(x, y);
        _sleep(intSleep);
        if (intLog == 1)
            console.log("tapUntil " + x1 + " " + y1 + " : " + getColor(x1, y1)[0][0]);
        if (_inArray(getColor(x1, y1)[0][0], arrC)) return 1;
        if (_timeStart(tg) > intTime) return 0;
    }
}

function _fastType(str) {
    if (typeof (str) != 'string') return 0;
    let len = str.length;
    for (let i = 0; i < len; i++) {
        inputText(str[i]);
        usleep(_ranbw(100000, 120000));
    }
    usleep(1000000);
}

function swiDown() {
    touchDown(7, 400, 450);
    usleep(100000);
    for (let y = 450; y < 1050; y += 30) {
        touchMove(7, 400, y);
        usleep(18000);
    }
    touchUp(7, 400, 1050);
    usleep(300000);
}

function _readCode() {
    let w = 120;
    let kq = "";
    let result = "";

    let arrNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const options = {
        region: { x: 50, y: 407, width: w, height: 45 },
        level: 0,
        debug: false,
    };
    usleep(2000000);
    ocr(options, (result, error) => {
        if (error) {
            console.log("error : " + error);
        } else {
            //
            //console.log(`Got result of recognizeText:\n${JSON.stringify(result, null, '    ')}`)

            if (result && result.length > 0 && result[0] && result[0].text) {
                kq = result[0].text; //Tim thay
            } else {
                kq = 0;
            }
            //tim thay hoac khong
        }
    });
    if (kq == 0) return 0;
    if (kq.length < 5) return 0;
    _Click(315, 438);
    usleep(2000000);
    _Click(21, 80);

    for (let i = 0; i < 5; i++) {
        if (_inArray(kq[i], arrNum)) result = result + kq[i];
    }
    return result;
}

function upSite(intKho) {
    let arrData;
    let strData;
    let token = "";
    let uid = "";
    let cookie = "";
    let maxRetries = 15;
    let success = false;

    toast("Getting data Facebook (tối đa 15 lần)...", 2);
    usleep(2000000);

    // Thử get token tối đa 10 lần
    for (let i = 1; i <= maxRetries; i++) {
        toast(`Lần thử ${i}/${maxRetries} - Getting data Facebook...`, 2);

        let x = at.exec("ccinfo getfb");
        if (x.lastIndexOf("\r\n") > 0) strData = x.split("\r\n");
        else strData = x.split("\n");

        // Kiểm tra dữ liệu có hợp lệ không
        if (strData[0] && strData[0].includes("|")) {
            arrData = strData[0].split("|");

            // Kiểm tra có đủ 3 phần tử (uid|token|cookie)
            if (arrData.length >= 3 && arrData[0] && arrData[1] && arrData[2]) {
                uid = arrData[0];
                token = arrData[1].slice(6, arrData[1].length);
                cookie = arrData[2];

                // Kiểm tra token có hợp lệ không (không rỗng và có độ dài hợp lý)
                if (token && token.length > 20) {
                    toast(`✅ Thành công lấy token ở lần thử ${i}`, 2);
                    success = true;
                    break;
                }
            }
        }

        toast(`❌ Lần thử ${i} thất bại, thử lại...`, 1);
        usleep(4000000); // Đợi 1 giây trước khi thử lại
    }

    // Nếu không lấy được token sau 10 lần, bỏ trống token
    if (!success) {
        toast("⚠️ Không lấy được token sau 10 lần, upload với token trống", 2);
        token = "";
        uid = "unknown";
        cookie = "unknown";
    }

    let json = {
        apikey: apiClone,
        type_id: intKho,
        uid: uid,
        pass: passToSave,
        cookie: cookie,
        token: token,
    };

    at.exec(`curl --location -g -m 30 \
--form 'apikey="${json.apikey}"' \
--form 'type_id="${json.type_id}"' \
--form 'uid="${json.uid}"' \
--form 'pass="${json.pass}"' \
--form 'cookie="${json.cookie}"' \
--form 'token="${json.token}"' \
'https://clonegiare.com/api/uploadproduct'`);

    if (success) {
        toast("Gửi Dữ Liệu Thành Công (có token)", 3);
    } else {
        toast("Gửi Dữ Liệu Thành Công (không có token)", 3);
    }
}

let test = 0;

// ═══════════════════════════════════════════════════════════════
// 🚀 KIỂM TRA UPDATE TỪ GITHUB TRƯỚC KHI CHẠY REG CODE
// ═══════════════════════════════════════════════════════════════
console.log("[MAIN] Kiểm tra cập nhật từ GitHub...");
let shouldRunWithUpdateCode = checkAndShowUpdateDialogForMain();

if (shouldRunWithUpdateCode) {
    // Đã update xong - khởi động lại file
    console.log("[MAIN] ✅ Update thành công! Khởi động lại file với code mới...");
    usleep(1000000);
    appRun(rootDir() + "/Facebook/regNVR.js");
    // Thoát khỏi file cũ - không chạy reg code cũ
}

console.log("[MAIN] Bắt đầu chạy tool...");

if (test == 0) {
    let thoigianhientai = new Date();
    let timein =
        thoigianhientai.getHours() + "h" + thoigianhientai.getMinutes() + "p";
    let timeout = "";

    let iCheck = 0;
    let thanhcong = 0;
    let dem = 0;

    getConfigbyName(nameIphone);
    _init();
    dauso = getPhone(col + 1);
    dausosave = _ranbw(0, dauso.length - 1);

    while (1) {
        const iterationStart = _currentTime();
        dem++;
        // Luôn reset 4G và thay đổi thông tin thiết bị sau mỗi lần chạy
        // Bất kể kết quả đăng ký trước đó thành công hay thất bại
        toast("🔄 Reset 4G và thay đổi thông tin thiết bị...", "center", 2);
        let resetResult = _reset(mode); // Reset 4G và thay đổi thông tin thiết bị

        // Kiểm tra kết quả reset - nếu thất bại thì chạy lượt mới
        if (resetResult == 0) {
            toast("❌ Reset thất bại, chạy lượt mới...", "center", 2);
            // Không làm gì cả, để vòng lặp while(1) chạy lại từ đầu với dem++
            usleep(3000000); // Chờ 3 giây trước khi chạy lượt mới
            continue; // Quay lại đầu vòng lặp while(1)
        }

        // Chạy quy trình đăng ký
        iCheck = _regAcc(dausosave, mode);

        if (_timeStart(iterationStart) > 300) {
            toast("⚠️ Quy trình đăng ký kéo dài bất thường, reset để tránh treo.", "center", 2);
            iCheck = 0;
            _reset(mode);
        }

        // Đổi đầu số tuần tự sau mỗi lần đăng ký (dù thành công hay thất bại)
        dausosave = (dausosave + 1) % dauso.length;
        toast("🔄 Chuyển sang đầu số tiếp theo: " + dauso[dausosave], "center", 2);

        // Cập nhật thống kê
        if (iCheck == 1) {
            thanhcong++;
            // KHÔNG tăng success1++ ở đây vì đã tăng trong _regAcc rồi
            // Bỏ reset fail1 = 0 để đếm đúng ngưỡng tích lũy
        } else if (iCheck == 0) {
            // Chỉ tăng fail1 khi iCheck = 0 (chưa được đếm fail)
            // iCheck = -1 nghĩa là đã đếm fail rồi trong _regAcc
            fail1++; // Tăng fail1 khi thất bại và chưa được đếm
        }
        // iCheck = -1 thì không làm gì cả vì đã đếm fail rồi
        // 🔥 Kiểm tra RSS được bật - để pickRss() tự quyết định xóa
        if (rss != 0) {
            pickRss(); // pickRss() sẽ kiểm tra ngưỡng bên trong
        }

        toast("Thành công : " + thanhcong + "/" + dem, 5);
        thoigianhientai = new Date();
        timeout =
            thoigianhientai.getHours() + "h" + thoigianhientai.getMinutes() + "p";
        upTile(nameIphone, thanhcong, dem - thanhcong, timein, timeout);

        usleep(3000000);
    }
}
//Code mới
