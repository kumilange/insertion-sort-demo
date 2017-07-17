const ANIM_CONTROLLER = {
  init: function () {
    this.setInstanceVar();
    this.setEventHandler();
    this.initAnimation();
  },
  setInstanceVar: function () {
    this.$nextBtn = $('#next-btn');
    this.animNum = 0;
    this.$elms = $('.js-elm');
    this.$codeSet = $('#code-set');
    this.$codeFor = $('#code-for');
    this.$codeIf = $('#code-if');
    this.$codeShift = $('#code-shift');
    this.$codeInsert = $('#code-insert');
    this.ANIM_APEED = 800;
    this.ELM_COLOR = {
      // white
      DEFAULT: {
        'background-color': '#FFFFFF',
        'border-color' : '#607D8B',
      },
      // pink
      PENDING: {
        'background-color': '#F48FB1',
        'border-color' : '#F48FB1',
      },
      // green
      COMPARED: {
        'background-color': '#26A69A',
        'border-color' : '#26A69A',
      },
      // light gray
      SORTED: {
        'background-color': '#B0BEC5',
        'border-color' : '#B0BEC5',
      }
    }
  },
  setEventHandler: function () {
    this.$nextBtn.on('click', ()=> {
      this.setAnimation(this.animNum++)
    });
  },
  initAnimation: function () {
    this.$elms.addClass('animated fadeInDown');
    this.setSortedElm(9);
  },
  shiftElm: function (elmValue, nextIndex) {
    return this.$elms.filter(function () {
      const $this = $(this);
      if($this.data('elm-no') === elmValue) {
        const index = $this.attr('index')
        $this.removeClass('elm' + index);
        $this.addClass('elm' + nextIndex);
        $this.attr('index', nextIndex);
      }
    });
  },
  setFilterCb: function (elmValue, cb) {
    return this.$elms.filter(function () {
      const $this = $(this);
      if($this.data('elm-no') === elmValue) {
        return cb($this);
      }
    });
  },
  startPendingElm: function (elmValue) {
    this.setFilterCb(elmValue, ($this)=> {
      $this.addClass('pending');
      $this.css(this.ELM_COLOR.PENDING);
    });
  },
  endPendingElm: function (elmValue) {
    this.setFilterCb(elmValue, ($this)=> {
      $this.removeClass('pending');
      $this.css(this.ELM_COLOR.SORTED);
    });
  },
  startComparedElm: function (elmValue) {
    this.setFilterCb(elmValue, ($this)=> {
      $this.css(this.ELM_COLOR.COMPARED);
    });
  },
  setSortedElm: function (elmValue) {
    this.setFilterCb(elmValue, ($this)=> {
      $this.css(this.ELM_COLOR.SORTED);
  });
  },
  addHighlight: function ($targetCode) {
    $targetCode.addClass('highlight');
  },
  removeHighlight: function ($targetCode) {
    $targetCode.removeClass('highlight');
  },
  delayShowHighlight: function ($remove, $add) {
    setTimeout(()=> {
      $remove.removeClass('highlight')
      $add.addClass('highlight');
    }, this.ANIM_APEED);
  },
  setAnimation: function () {
    if(this.animNum === 1) {
      this.addHighlight(this.$codeSet);
      this.delayShowHighlight(this.$codeSet, this.$codeFor);
      this.startPendingElm(3);
      this.startComparedElm(9);
    } else if(this.animNum === 2) {
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(9, 1);
      this.setSortedElm(9);
      this.shiftElm(3, 0);
      this.delayShowHighlight(this.$codeShift, this.$codeFor);
    } else if(this.animNum === 3) {
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeInsert);
      this.endPendingElm(3);
      this.setSortedElm(3);
    } else if(this.animNum === 4) {
      this.removeHighlight(this.$codeInsert);
      this.addHighlight(this.$codeSet);
      this.delayShowHighlight(this.$codeSet, this.$codeFor);
      this.startPendingElm(6);
      this.startComparedElm(9);
    } else if(this.animNum === 5){
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(9, 2);
      this.setSortedElm(9);
      this.shiftElm(6, 1);
    } else if(this.animNum === 6) {
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(3);
    } else if(this.animNum === 7){
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeIf);
      this.delayShowHighlight(this.$codeIf, this.$codeInsert);
      this.setSortedElm(3);
      this.endPendingElm(6);
    } else if(this.animNum === 8){
      this.removeHighlight(this.$codeInsert);
      this.addHighlight(this.$codeSet);
      this.delayShowHighlight(this.$codeSet, this.$codeFor);
      this.startPendingElm(1);
      this.startComparedElm(9);
    } else if(this.animNum === 9){
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(9, 3);
      this.setSortedElm(9);
      this.shiftElm(1, 2);
    } else if(this.animNum === 10){
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(6);
    } else if(this.animNum === 11){
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(6, 2);
      this.setSortedElm(6);
      this.shiftElm(1, 1);
    } else if(this.animNum === 12){
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(3);
    } else if(this.animNum === 13){
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(3, 1);
      this.setSortedElm(3);
      this.shiftElm(1, 0);
    } else if(this.animNum === 14){
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeIf);
      this.delayShowHighlight(this.$codeIf, this.$codeInsert);
      this.endPendingElm(1);
    } else if(this.animNum === 15){
      this.removeHighlight(this.$codeInsert);
      this.addHighlight(this.$codeSet);
      this.delayShowHighlight(this.$codeSet, this.$codeFor);
      this.startPendingElm(2);
      this.startComparedElm(9);
    } else if(this.animNum === 16) {
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(9, 4);
      this.setSortedElm(9);
      this.shiftElm(2, 3);
    } else if(this.animNum === 17) {
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(6);
    } else if(this.animNum === 18) {
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(6, 3);
      this.setSortedElm(6);
      this.shiftElm(2, 2);
    } else if(this.animNum === 19) {
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(3);
    } else if(this.animNum === 20) {
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeShift);
      this.shiftElm(3, 2);
      this.setSortedElm(3);
      this.shiftElm(2, 1);
    } else if(this.animNum === 21) {
      this.removeHighlight(this.$codeShift);
      this.addHighlight(this.$codeFor);
      this.startComparedElm(1);
    } else if(this.animNum === 22) {
      const _self = this;
      this.removeHighlight(this.$codeFor);
      this.addHighlight(this.$codeIf);
      this.delayShowHighlight(this.$codeIf, this.$codeInsert);
      this.setSortedElm(1);
      this.endPendingElm(2);
      this.$elms.removeClass('fadeInDown')
      setTimeout(()=> {
        _self.$elms.addClass('bounce')
      }, this.ANIM_APEED);
    }
  },
}

ANIM_CONTROLLER.init();

