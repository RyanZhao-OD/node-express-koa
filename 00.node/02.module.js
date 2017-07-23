/**
 * 每个文件模块都是一个对象 定义如下
 * @param id
 * @param parent
 * @constructor
 */
function Module(id, parent) {
    this.id = id;
    this.exports = {};
    this.parent = parent;

    if (parent && parent.children) {
        parent.children.push(this);
    }

    this.filename = null;
    this.loaded = false;
    this.children = [];
}



