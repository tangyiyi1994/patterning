
cc.Class({
  extends: cc.Component,

  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.m_origin = cc.find("origin", this.node);
    this.m_current_hang = 0;//当前行
    this.m_current_lie = 0;//当前列
  },

  start () {

  },
  print (str) {
    let _width = 50;
    let _heigh = 50;
    let num = 15;
    for (let x of str) {
      //1. 创建str 中所有的字符
      let a = this.create_label(x);
      a.position = cc.v2(this.m_current_lie * _width, -this.m_current_hang * _heigh)
      //2. 放在这个脚本依附的node 下的origin结点
      this.m_origin.addChild(a);
      //每输出一个字列+1
      this.m_current_lie++;
      //当列的数大于等于最大的列了就换行+1
      if (this.m_current_lie >= num) {
        this.m_current_lie = 0;
        this.m_current_hang++;
      }
    }
  },
  //创建文本输出
  create_label (str) {
    let label = new cc.Node;
    let m_label = label.addComponent(cc.Label)
    m_label.string = str;
    return label;
  }

  // update (dt) {},
});
