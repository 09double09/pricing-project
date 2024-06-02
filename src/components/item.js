class table {
  constructor(texture, length, breadth, isSeal, isTrucking, span) {
    this.texture = texture;
    this.length = length;
    this.breadth = breadth;
    this.isSeal = isSeal;
    this.isTrucking = isTrucking;
    this.span = span;
  }
  costPrice() {
    if (this.texture === "iron") {
      if (!this.isSeal && !this.isTrucking) {
        if (this.breadth === 700) {
          return (this.length / 300) * 1700;
        }
        if (this.breadth === 750) {
          return (this.length / 300) * 1900;
        }
        if (this.breadth === 900) {
          return (this.length / 300) * 2500;
        }
        if (this.breadth === 1000) {
          return;
        }
      }
      if (this.isSeal && this.isTrucking) {
        if (this.breadth === 700) {
          return;
        }
        if (this.breadth === 750) {
          return (this.length / 300) * 2280;
        }
        if (this.breadth === 900) {
          return;
        }
        if (this.breadth === 1000) {
          return;
        }
      }
      if (!this.isSeal && this.isTrucking) {
        if (this.breadth === 700) {
          return;
        }
        if (this.breadth === 750) {
          return (this.length / 300) * 2000;
        }
        if (this.breadth === 900) {
          return (this.length / 300) * 2700;
        }
        if (this.breadth === 1000) {
          return (this.length / 300) * 2800;
        }
      }
    }
  }
  sellPrice() {
    if (this.texture === "iron") {
      if (!this.isSeal && !this.isTrucking) {
        if (this.breadth === 700) {
          return 2300;
        }
        if (this.breadth === 750) {
          return 2600;
        }
        if (this.breadth === 900) {
          return 3400;
        }
        if (this.breadth === 1000) {
          return;
        }
      }
      if (this.isSeal && this.isTrucking) {
        if (this.breadth === 700) {
          return;
        }
        if (this.breadth === 750) {
          return 3100;
        }
        if (this.breadth === 900) {
          return;
        }
        if (this.breadth === 1000) {
          return;
        }
      }
      if (!this.isSeal && this.isTrucking) {
        if (this.breadth === 700) {
          return;
        }
        if (this.breadth === 750) {
          return 2700;
        }
        if (this.breadth === 900) {
          return 3600;
        }
        if (this.breadth === 1000) {
          return 3800;
        }
      }
    }
  }
}
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
class notCountableStuff {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
let allItem = {
  懸吊桌: {
    texture: {
      鋼製: [700, 750, 900, 1000],
    },
    Countable: true,
  },
  封板: {
    texture: {
      鋼製: ["側封板", "750型側封", "900型側封", "美背"],
      sus: ["側封板", "750型側封", "900型側封", "美背"],
    },
    Countable: true,
  },
  立柱: {
    texture: {
      鋼製: [2000, 2200, 2300, 2400],
    },
    Countable: false,
  },
  藥品層架: {
    texture: ["鋼製", "sus"],
    Countable: true,
  },
  線槽: {
    texture: ["鋼製"],
    Countable: true,
  },
  拖板架: {
    texture: ["鋼製", "sus"],
    Countable: false,
  },
  壁櫃: {
    texture: {
      鋼製: [
        "雙門750",
        "雙門900",
        "四門1125",
        "四門1200",
        "四門1350",
        "四門1500",
      ],

      sus: [
        "雙門750",
        "雙門900",
        "四門1125",
        "四門1200",
        "四門1350",
        "四門1500",
      ],
    },
    Countable: false,
  },
  玻璃壁櫃: {
    texture: {
      鋼製: [
        "雙玻璃750",
        "雙玻璃900",
        "四玻璃1125",
        "四玻璃1200",
        "四玻璃1350",
        "四玻璃1500",
      ],
      sus: [
        "雙玻璃750",
        "雙玻璃900",
        "四玻璃1125",
        "四玻璃1200",
        "四玻璃1350",
        "四玻璃1500",
      ],
    },
    Countable: false,
  },
  玻璃加框壁櫃: {
    texture: {
      鋼製尺寸: [
        "雙門750",
        "雙門900",
        "四門1125",
        "四門1200",
        "四門1350",
        "四門1500",
      ],

      sus尺寸: [
        "雙門750",
        "雙門900",
        "四門1125",
        "四門1200",
        "四門1350",
        "四門1500",
      ],
    },
    Countable: false,
  },
  懸吊下櫃三或四抽櫃: {
    texture: {
      三抽櫃尺寸: [375, 450, 600, 750, 900],
      四抽櫃尺寸: [375, 450, 600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃三或四抽加連動鎖: {
    texture: {
      三抽櫃連動鎖尺寸: [375, 450, 600, 750, 900],
      四抽櫃連動鎖尺寸: [375, 450, 600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃單抽封板: {
    texture: {
      單抽封板尺寸: [375, 450, 600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃單抽單門: {
    texture: {
      右開門尺寸: [375, 450],
      左開門尺寸: [375, 450],
    },
    Countable: false,
  },
  懸吊下櫃單抽單門加鎖: {
    texture: {
      右開門尺寸: [375, 450],
      左開門尺寸: [375, 450],
    },
    Countable: false,
  },
  懸吊下櫃單抽雙門: {
    texture: {
      尺寸: [600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃雙抽雙門: {
    texture: {
      尺寸: [600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃單抽雙門內縮: {
    texture: {
      尺寸: [600, 750, 900],
    },
    Countable: false,
  },
  懸吊下跪雙抽雙門內縮: {
    texture: {
      尺寸: [600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃單門: {
    texture: {
      右開門尺寸: [375, 450],
      左開門尺寸: [375, 450],
    },
    Countable: false,
  },
  懸吊下櫃雙門: {
    texture: {
      右開門尺寸: [600, 750, 900],
      左開門尺寸: [600, 750, 900],
    },
    Countable: false,
  },
  懸吊下櫃水槽: {
    texture: {
      鋼製: ["雙門750", "雙門900", "雙門1200", "雙門1500"],
      sus: ["雙門750", "雙門900", "雙門1200", "雙門1500"],
    },
    Countable: false,
  },
  懸吊下櫃PP製: {
    texture: ["無抽屜單門", "無抽屜雙門", "一抽屜單門", "一抽屜雙門", "三抽屜"],
    Countable: true,
  },
  落地櫃PP製: {
    texture: [
      "無抽屜單門",
      "無抽屜雙門",
      "一抽屜單門",
      "一抽屜雙門",
      "三抽屜",
      "雙抽雙門",
      "雙抽雙門內縮",
      "無抽屜無門無封板",
      "落地水槽",
    ],
    Countable: true,
  },
};

export { allItem };
