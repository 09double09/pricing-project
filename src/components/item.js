class seal {
  constructor(texture, category, length) {
    this.texture = texture;
    this.category = category;
    this.length = length;
  }
  costPrice() {
    if (this.texture === "鋼製") {
      if (this.category === "側封板") {
        return this.length * 13;
      }
      if (this.category === "750型側封") {
        return this.length * 180;
      }
      if (this.category === "900型側封") {
        return this.length * 190;
      }
      if (this.category === "美背") {
        return this.length * 20;
      }
    }
    if (this.texture === "sus") {
      if (this.category === "側封板") {
        return this.length * 20;
      }
      if (this.category === "750型側封") {
        return this.length * 180;
      }
      if (this.category === "900型側封") {
        return this.length * 190;
      }
      if (this.category === "美背") {
        return this.length * 40;
      }
    }
  }
  sellPrice() {
    if (this.texture === "鋼製") {
      if (this.category === "側封板") {
        return this.length * 18;
      }
      if (this.category === "750型側封") {
        return this.length * 240;
      }
      if (this.category === "900型側封") {
        return this.length * 255;
      }
      if (this.category === "美背") {
        return this.length * 30;
      }
    }
    if (this.texture === "sus") {
      if (this.category === "側封板") {
        return this.length * 30;
      }
      if (this.category === "750型側封") {
        return this.length * 240;
      }
      if (this.category === "900型側封") {
        return this.length * 255;
      }
      if (this.category === "美背") {
        return this.length * 40;
      }
    }
  }
}
class column {
  constructor(texture, length) {
    this.texture = texture;
    this.length = length;
  }
  costPrice() {
    if (this.texture === "鋼製") {
      if (this.length === 2000) {
        return 1500;
      }
      if (this.length === 2200) {
        return 1600;
      }
      if (this.length === 2300) {
        return 1650;
      }
      if (this.length === 2400) {
        return 1700;
      }
    }
  }
  sellPrice() {
    if (this.texture === "鋼製") {
      if (this.length === 2000) {
        return 2000;
      }
      if (this.length === 2200) {
        return 2150;
      }
      if (this.length === 2300) {
        return 2200;
      }
      if (this.length === 2400) {
        return 2300;
      }
    }
  }
}
class columnLinkage {
  constructor(length) {
    this.length = length;
  }
  costPrice() {
    return this.length * 5;
  }
  sellPrice() {
    return this.length * 5;
  }
}
class shelve {
  constructor(texture, length, breadth, height) {
    this.texture = texture;
    this.length = length;
    this.breadth = breadth;
    this.height = height;
  }
  costPrice() {
    if (this.texture === "鋼製") {
      return this.length * this.breadth * this.height * 10;
    }
    if (this.texture === "sus") {
      return this.length * this.breadth * this.height * 15;
    }
  }
  sellPrice() {
    if (this.texture === "鋼製") {
      return this.length * this.breadth * this.height * 14;
    }
    if (this.texture === "sus") {
      return this.length * this.breadth * this.height * 20;
    }
  }
}
class trucking {
  constructor(texture, length, breadth, height) {
    this.texture = texture;
    this.length = length;
    this.breadth = breadth;
    this.height = height;
  }
  costPrice() {
    if (this.texture === "鋼製") {
      return this.length * this.breadth * this.height * 8;
    }
  }
  sellPrice() {
    if (this.texture === "鋼製") {
      return this.length * this.breadth * this.height * 10;
    }
  }
}
class palletRack {
  constructor(texture) {
    this.texture = texture;
  }
  costPrice() {
    if (this.texture === "鋼製") {
      return 320;
    }
    if (this.texture === "sus") {
      return 600;
    }
  }
  sellPrice() {
    if (this.texture === "鋼製") {
      return 430;
    }
    if (this.texture === "sus") {
      return 800;
    }
  }
}
class table {}
class stuff {
  constructor(name, costPrice, sellPrice) {
    this.name = name;
    this.costPrice = costPrice;
    this.sellPrice = sellPrice;
  }
}

let allItem = {
  封板: {
    texture: {
      鋼製: [
        { 側封板: { costPrice: 13, sellPrice: 18 } },
        { 750: { costPrice: 180, sellPrice: 240 } },
        { 900: { costPrice: 190, sellPrice: 255 } },
        { 美背: { costPrice: 20, sellPrice: 30 } },
      ],
      sus: [
        { 側封板: { costPrice: 20, sellPrice: 30 } },
        { 750: { costPrice: 0, sellPrice: 0 } },
        { 900: { costPrice: 0, sellPrice: 0 } },
        { 美背: { costPrice: 40, sellPrice: 55 } },
      ],
    },
    countable: null,
  },
  立柱: {
    texture: {
      鋼製: [
        { 2000: { costPrice: 1500, sellPrice: 2000 } },
        { 2200: { costPrice: 1600, sellPrice: 2150 } },
        { 2300: { costPrice: 1650, sellPrice: 2200 } },
        { 2400: { costPrice: 1700, sellPrice: 2300 } },
      ],
    },
    countable: false,
  },
  主柱連桿: {
    texture: {
      連桿: {
        costPrice: 5,
        sellPrice: 7,
      },
    },
    countable: true,
  },
  藥品層架: {
    texture: {
      鋼製: { costPrice: 10, sellPrice: 14 },
      sus: { costPrice: 15, sellPrice: 20 },
    },
    countable: true,
  },
  線槽: {
    texture: { 鋼製: { costPrice: 8, sellPrice: 10 } },
    countable: true,
  },
  拖板架: {
    texture: {
      鋼製: [{ 鋼製拖板架: { costPrice: 320, sellPrice: 430 } }],
      sus: [{ sus製拖板架: { costPrice: 600, sellPrice: 800 } }],
    },
    countable: false,
  },
  壁櫃: {
    texture: {
      鋼製: [
        { 雙門750: { costPrice: 5500, sellPrice: 7300 } },
        { 雙門900: { costPrice: 6000, sellPrice: 8000 } },
        { 四門1125: { costPrice: 8000, sellPrice: 10600 } },
        { 四門1200: { costPrice: 8500, sellPrice: 11300 } },
        { 四門1350: { costPrice: 9000, sellPrice: 12000 } },
        { 四門1500: { costPrice: 9500, sellPrice: 12600 } },
      ],

      sus: [
        { 雙門750: { costPrice: 8000, sellPrice: 10600 } },
        { 雙門900: { costPrice: 9000, sellPrice: 12000 } },
        { 四門1125: { costPrice: 11450, sellPrice: 15200 } },
        { 四門1200: { costPrice: 1200, sellPrice: 16600 } },
        { 四門1350: { costPrice: 13400, sellPrice: 17800 } },
        { 四門1500: { costPrice: 14700, sellPrice: 19500 } },
      ],
    },
    countable: false,
  },
  玻璃壁櫃: {
    texture: {
      鋼製: [
        { 雙玻璃750: { costPrice: 5500, sellPrice: 7300 } },
        { 雙玻璃900: { costPrice: 6000, sellPrice: 8000 } },
        { 雙玻璃1125: { costPrice: 8000, sellPrice: 10600 } },
        { 雙玻璃100: { costPrice: 8500, sellPrice: 11300 } },
        { 四玻璃1350: { costPrice: 9000, sellPrice: 12000 } },
        { 四玻璃1500: { costPrice: 9500, sellPrice: 12600 } },
      ],
      sus: [
        { 雙玻璃750: { costPrice: 8000, sellPrice: 10600 } },
        { 雙玻璃900: { costPrice: 9000, sellPrice: 12000 } },
        { 雙玻璃1125: { costPrice: 11450, sellPrice: 15200 } },
        { 雙玻璃100: { costPrice: 12500, sellPrice: 16600 } },
        { 四玻璃1350: { costPrice: 13400, sellPrice: 17800 } },
        { 四玻璃1500: { costPrice: 14700, sellPrice: 19500 } },
      ],
    },
    countable: false,
  },
  玻璃加框壁櫃: {
    texture: {
      鋼製尺寸: [
        { 雙門750: { costPrice: 6000, sellPrice: 8000 } },
        { 雙門900: { costPrice: 6500, sellPrice: 8700 } },
        { 四門板1125: { costPrice: 9000, sellPrice: 12000 } },
        { 四門板1200: { costPrice: 10000, sellPrice: 13300 } },
        { 四門板1350: { costPrice: 10500, sellPrice: 14400 } },
        { 四門板1500: { costPrice: 11000, sellPrice: 14650 } },
      ],

      sus尺寸: [
        { 雙門750: { costPrice: 8600, sellPrice: 11450 } },
        { 雙門900: { costPrice: 9600, sellPrice: 12800 } },
        { 四門板1125: { costPrice: 12750, sellPrice: 17000 } },
        { 四門板1200: { costPrice: 13800, sellPrice: 18400 } },
        { 四門板1350: { costPrice: 14700, sellPrice: 19500 } },
        { 四門板1500: { costPrice: 16000, sellPrice: 21300 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃三或四抽櫃: {
    texture: {
      三抽櫃尺寸: [
        { 375: { costPrice: 7150, sellPrice: 9500 } },
        { 450: { costPrice: 7450, sellPrice: 9900 } },
        { 600: { costPrice: 8200, sellPrice: 10900 } },
        { 750: { costPrice: 9000, sellPrice: 12000 } },
        { 900: { costPrice: 9900, sellPrice: 13200 } },
      ],
      四抽櫃尺寸: [
        { 375: { costPrice: 7800, sellPrice: 10400 } },
        { 450: { costPrice: 8320, sellPrice: 11100 } },
        { 600: { costPrice: 8200, sellPrice: 11000 } },
        { 750: { costPrice: 9900, sellPrice: 13200 } },
        { 900: { costPrice: 10920, sellPrice: 14550 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃三或四抽加連動鎖: {
    texture: {
      三抽櫃連動鎖尺寸: [
        { 375: { costPrice: 7700, sellPrice: 10250 } },
        { 450: { costPrice: 8000, sellPrice: 10600 } },
        { 600: { costPrice: 8800, sellPrice: 11750 } },
        { 750: { costPrice: 9500, sellPrice: 12650 } },
        { 900: { costPrice: 10500, sellPrice: 14000 } },
      ],
      四抽櫃連動鎖尺寸: [
        { 375: { costPrice: 8600, sellPrice: 11450 } },
        { 450: { costPrice: 9100, sellPrice: 12100 } },
        { 600: { costPrice: 9000, sellPrice: 12000 } },
        { 750: { costPrice: 9600, sellPrice: 12800 } },
        { 900: { costPrice: 11700, sellPrice: 15600 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單抽封板: {
    texture: {
      單抽封板尺寸: [
        { 375: { costPrice: 3300, sellPrice: 4400 } },
        { 450: { costPrice: 3500, sellPrice: 4700 } },
        { 600: { costPrice: 3800, sellPrice: 5100 } },
        { 750: { costPrice: 4100, sellPrice: 5500 } },
        { 900: { costPrice: 4550, sellPrice: 6100 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單抽單門: {
    texture: {
      右開門尺寸: [
        { 375: { costPrice: 5100, sellPrice: 6800 } },
        { 450: { costPrice: 5400, sellPrice: 7200 } },
      ],
      左開門尺寸: [
        { 375: { costPrice: 5100, sellPrice: 6800 } },
        { 450: { costPrice: 5400, sellPrice: 7200 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單抽單門加鎖: {
    texture: {
      右開門尺寸: [
        { 375: { costPrice: 5300, sellPrice: 7100 } },
        { 450: { costPrice: 5500, sellPrice: 7400 } },
      ],
      左開門尺寸: [
        { 375: { costPrice: 5300, sellPrice: 7100 } },
        { 450: { costPrice: 5500, sellPrice: 7400 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單抽雙門: {
    texture: {
      尺寸: [
        { 600: { costPrice: 6400, sellPrice: 8500 } },
        { 750: { costPrice: 7000, sellPrice: 9400 } },
        { 900: { costPrice: 7800, sellPrice: 10400 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃雙抽雙門: {
    texture: {
      尺寸: [
        { 600: { costPrice: 0, sellPrice: 0 } },
        { 750: { costPrice: 0, sellPrice: 0 } },
        { 900: { costPrice: 8700, sellPrice: 11600 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單抽雙門內縮: {
    texture: {
      尺寸: [
        { 四門1500: { costPrice: 7000, sellPrice: 9400 } },
        { 四門1500: { costPrice: 7550, sellPrice: 10100 } },
        { 四門1500: { costPrice: 8450, sellPrice: 11300 } },
      ],
    },
    countable: false,
  },
  懸吊下跪雙抽雙門內縮: {
    texture: {
      尺寸: [
        { 四門1500: { costPrice: 0, sellPrice: 0 } },
        { 四門1500: { costPrice: 0, sellPrice: 0 } },
        { 四門1500: { costPrice: 9400, sellPrice: 12500 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃單門: {
    texture: {
      右開門尺寸: [
        { 375: { costPrice: 3650, sellPrice: 4900 } },
        { 450: { costPrice: 3800, sellPrice: 5100 } },
      ],
      左開門尺寸: [
        { 375: { costPrice: 3650, sellPrice: 4900 } },
        { 450: { costPrice: 3800, sellPrice: 5100 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃雙門: {
    texture: {
      右開門尺寸: [
        { 600: { costPrice: 4700, sellPrice: 6300 } },
        { 750: { costPrice: 5200, sellPrice: 7000 } },
        { 900: { costPrice: 5700, sellPrice: 7600 } },
      ],
      左開門尺寸: [
        { 600: { costPrice: 4700, sellPrice: 6300 } },
        { 750: { costPrice: 5200, sellPrice: 7000 } },
        { 900: { costPrice: 5700, sellPrice: 7600 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃水槽: {
    texture: {
      鋼製: [
        { 雙門750: { costPrice: 5000, sellPrice: 6700 } },
        { 雙門900: { costPrice: 5200, sellPrice: 7000 } },
        { 雙門1200: { costPrice: 6700, sellPrice: 8900 } },
        { 雙門1500: { costPrice: 7300, sellPrice: 9700 } },
      ],
      sus: [
        { 雙門750: { costPrice: 6900, sellPrice: 9200 } },
        { 雙門900: { costPrice: 7500, sellPrice: 10000 } },
        { 雙門1200: { costPrice: 9900, sellPrice: 13200 } },
        { 雙門1500: { costPrice: 11100, sellPrice: 14800 } },
      ],
    },
    countable: false,
  },
  懸吊下櫃PP製: {
    texture: {
      PP製: [
        { 無抽屜單門: { costPrice: 140, sellPrice: 190 } },
        { 無抽屜雙門: { costPrice: 140, sellPrice: 190 } },
        { 一抽屜單門: { costPrice: 160, sellPrice: 215 } },
        { 一抽屜雙門: { costPrice: 160, sellPrice: 215 } },
        { 三抽屜: { costPrice: 175, sellPrice: 235 } },
      ],
    },
    countable: null,
  },
  落地櫃PP製: {
    texture: {
      PP製: [
        { 無抽屜單門: { costPrice: 280, sellPrice: 375 } },
        { 無抽屜雙門: { costPrice: 280, sellPrice: 375 } },
        { 一抽屜單門: { costPrice: 315, sellPrice: 420 } },
        { 一抽屜雙門: { costPrice: 315, sellPrice: 420 } },
        { 三抽屜: { costPrice: 330, sellPrice: 440 } },
        { 雙抽雙門: { costPrice: 300, sellPrice: 400 } },
        { 雙抽雙門內縮: { costPrice: 390, sellPrice: 520 } },
        { 無抽屜無門無封板: { costPrice: 125, sellPrice: 170 } },
        { 落地水槽: { costPrice: 235, sellPrice: 320 } },
      ],
    },
    countable: null,
  },
};
let designs = {
  鋼製懸吊桌: {
    texture: {
      無封板無線槽: [
        { 700: { costPrice: 1700, sellPrice: 2300 } },
        { 750: { costPrice: 1900, sellPrice: 2600 } },
        { 900: { costPrice: 2500, sellPrice: 3400 } },
        { 1000: { costPrice: 0, sellPrice: 0 } },
      ],
      無封板有線槽: [
        { 700: { costPrice: 0, sellPrice: 0 } },
        { 750: { costPrice: 2000, sellPrice: 2700 } },
        { 900: { costPrice: 2700, sellPrice: 3600 } },
        { 1000: { costPrice: 2800, sellPrice: 3800 } },
      ],
      有封板有線槽: [
        { 700: { costPrice: 0, sellPrice: 0 } },
        { 750: { costPrice: 2280, sellPrice: 3100 } },
        { 900: { costPrice: 0, sellPrice: 0 } },
        { 1000: { costPrice: 0, sellPrice: 0 } },
      ],
    },
    countable: null,
  },
};
export { allItem, stuff, designs };
