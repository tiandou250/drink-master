/* 本地存储：备料勾选进度、制作步骤进度。
   静态小程序，不接云服务，数据只存在这台手机。 */

var KEY_CHECKED = 'dm_checked_v1';
var KEY_PROGRESS = 'dm_progress_v1';

function readAll(key) {
    try {
        var v = wx.getStorageSync(key);
        return v && typeof v === 'object' ? v : {};
    } catch (e) {
        return {};
    }
}

function writeAll(key, obj) {
    try {
        wx.setStorageSync(key, obj);
    } catch (e) {
        /* 存储写满时忽略，不影响使用 */
    }
}

function getChecked(id) {
    var all = readAll(KEY_CHECKED);
    return all[id] || {};
}

function toggleChecked(id, name) {
    var all = readAll(KEY_CHECKED);
    if (!all[id]) all[id] = {};
    all[id][name] = !all[id][name];
    writeAll(KEY_CHECKED, all);
    return all[id];
}

function clearChecked(id) {
    var all = readAll(KEY_CHECKED);
    delete all[id];
    writeAll(KEY_CHECKED, all);
}

function getStep(id) {
    var all = readAll(KEY_PROGRESS);
    var v = all[id];
    return typeof v === 'number' ? v : 0;
}

function setStep(id, step) {
    var all = readAll(KEY_PROGRESS);
    all[id] = step;
    writeAll(KEY_PROGRESS, all);
}

module.exports = {
    getChecked: getChecked,
    toggleChecked: toggleChecked,
    clearChecked: clearChecked,
    getStep: getStep,
    setStep: setStep
};
