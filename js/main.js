const box = document.getElementById('root');
const name = document.getElementById('nameShop');
const address = document.getElementById('addressShop');
const open = document.getElementById('openShop');
const close = document.getElementById('closeShop');
const addShop = document.getElementById('addShop');
const showMap = document.querySelector('.show-map');
let allNum;
let n;
let count = 1;
let num = 1;

class Item {
  constructor(itemName, itemDescr) {
    this.name = itemName;
    this.description = itemDescr;
  }

  buildRow() {
    this.TR = document.createElement('tr');
    this.TR.classList.add('table');
    this.TD1 = document.createElement('td');
    this.TR.appendChild(this.TD1);
    this.TD1.innerHTML = this.name;
    this.TD2 = document.createElement('td');
    this.TR.appendChild(this.TD2);
    this.TD2.innerHTML = this.description;
    this.delTR = document.createElement('button');
    this.TR.appendChild(this.delTR);
    this.delTR.classList.add('btn', 'btn-primary');
    this.delTR.innerHTML = 'Delete item';

    this.delTR.addEventListener('click', () => {
      this.TR.remove();
    })
  }
}

class Shop {
  constructor(count, num, name, address, open, close) {
    this.count = count;
    this.num = num;
    this.name = name;
    this.address = address;
    this.open = open;
    this.close = close;
    this.inDiv = document.createElement('div');
    this.outDiv = document.createElement('div');
    this.inDiv.classList.add('shop');
    this.outDiv.classList.add('col-md-6', 'col-sm-6', 'col-lg-3');
    this.numDiv = document.createElement('div');
    this.numDiv.classList.add('num-div');
    this.numDiv.innerHTML = this.num;
    this.h3 = document.createElement('h3');
    this.h3.innerHTML = this.name;
    this.h4 = document.createElement('h4');
    this.h4.classList.add('shop-street');
    this.h4.innerHTML = this.address;
    this.p = document.createElement('p');
    this.p.innerHTML = `${this.open} &#8212; ${this.close}`;
    this.delShop = document.createElement('button');
    this.delShop.classList.add('btn', 'btn-primary');
    this.delShop.innerHTML = 'Delete shop';
    this.edit = document.createElement('button');
    this.edit.classList.add('btn', 'btn-primary');
    this.edit.setAttribute('type', 'button');
    this.edit.setAttribute('data-toggle', 'modal');
    this.edit.setAttribute('data-target', `#editShop${count}`);
    this.edit.innerHTML = `Edit shop`;
    this.addItem = document.createElement('button');
    this.addItem.classList.add('btn', 'btn-primary');
    this.addItem.setAttribute('type', 'button');
    this.addItem.setAttribute('data-toggle', 'modal');
    this.addItem.setAttribute('data-target', `#item${count}`);
    this.addItem.innerHTML = 'Add item';
    this.showItems = document.createElement('button');
    this.showItems.classList.add('btn', 'btn-primary');
    this.showItems.setAttribute('type', 'button');
    this.showItems.setAttribute('data-toggle', 'modal');
    this.showItems.setAttribute('data-target', `#table${count}`);
    this.showItems.innerHTML = 'Show items';
  }

  build() {
    this.inDiv.appendChild(this.numDiv);
    this.inDiv.appendChild(this.h3);
    this.inDiv.appendChild(this.h4);
    this.inDiv.appendChild(this.p);
    this.inDiv.appendChild(this.delShop);
    this.inDiv.appendChild(this.edit);
    this.inDiv.appendChild(this.addItem);
    this.inDiv.appendChild(this.showItems);
    this.outDiv.appendChild(this.inDiv);
    box.appendChild(this.outDiv);
  }

  editShop() {
    this.modal = document.createElement('div');
    this.inDiv.appendChild(this.modal);
    this.modal.classList.add('modal', 'fade');
    this.modal.setAttribute('id', `editShop${count}`);
    this.modal.setAttribute('tabindex', '-1');
    this.modal.setAttribute('role', 'dialog');
    this.modalDialog = document.createElement('div');
    this.modal.appendChild(this.modalDialog);
    this.modalDialog.classList.add('modal-dialog');
    this.modalDialog.setAttribute('role', 'document');
    this.modalContent = document.createElement('div');
    this.modalDialog.appendChild(this.modalContent);
    this.modalContent.classList.add('modal-content');
    this.modalHeader = document.createElement('div');
    this.modalContent.appendChild(this.modalHeader);
    this.modalHeader.classList.add('modal-header');
    this.modalHeadBut = document.createElement('button');
    this.modalHeader.appendChild(this.modalHeadBut);
    this.modalHeadBut.classList.add('close');
    this.modalHeadBut.setAttribute('type', 'button');
    this.modalHeadBut.setAttribute('data-dismiss', 'modal');
    this.modalHeadBut.setAttribute('aria-label', 'Close');
    this.modalSpan = document.createElement('span');
    this.modalHeadBut.appendChild(this.modalSpan);
    this.modalSpan.setAttribute('aria-hidden', 'true');
    this.modalSpan.innerHTML = '&times';
    this.modalH4 = document.createElement('h4');
    this.modalHeader.appendChild(this.modalH4);
    this.modalH4.classList.add('modal-title');
    this.modalH4.innerHTML = 'Edit shop';
    this.modalBody = document.createElement('div');
    this.modalContent.appendChild(this.modalBody);
    this.modalBody.classList.add('modal-body');
    this.modalForm = document.createElement('form');
    this.modalBody.appendChild(this.modalForm);
    this.modalForm1 = document.createElement('div');
    this.modalForm.appendChild(this.modalForm1);
    this.modalForm1.classList.add('form-group');
    this.modalLabel1 = document.createElement('label');
    this.modalForm1.appendChild(this.modalLabel1);
    this.modalLabel1.classList.add('control-label');
    this.modalLabel1.setAttribute('for', 'editName');
    this.modalLabel1.innerHTML = 'Name of shop';
    this.modalInput1 = document.createElement('input');
    this.modalInput1.setAttribute('type', 'text');
    this.modalForm1.appendChild(this.modalInput1);
    this.modalInput1.classList.add('form-control');
    this.modalInput1.setAttribute('id', `editName${count}`);
    this.modalForm2 = document.createElement('div');
    this.modalForm.appendChild(this.modalForm2);
    this.modalForm2.classList.add('form-group');
    this.modalLabel2 = document.createElement('label');
    this.modalForm2.appendChild(this.modalLabel2);
    this.modalLabel2.classList.add('control-label');
    this.modalLabel2.setAttribute('for', 'editAddress');
    this.modalLabel2.innerHTML = 'Address of shop';
    this.modalInput2 = document.createElement('input');
    this.modalInput2.setAttribute('type', 'text');
    this.modalForm2.appendChild(this.modalInput2);
    this.modalInput2.classList.add('form-control');
    this.modalInput2.setAttribute('id', `editAddress${count}`);
    this.modalForm3 = document.createElement('div');
    this.modalForm.appendChild(this.modalForm3);
    this.modalForm3.classList.add('form-group');
    this.modalLabel3 = document.createElement('label');
    this.modalForm3.appendChild(this.modalLabel3);
    this.modalLabel3.classList.add('control-label', 'working');
    this.modalLabel3.innerHTML = 'Working hours';
    this.modalSelect1 = document.createElement('select');
    this.modalForm3.appendChild(this.modalSelect1);
    this.modalSelect1.classList.add('form-control', 'working-hours');
    this.modalSelect1.setAttribute('id', `editOpen${count}`);
    this.modalOption1 = document.createElement('option');
    this.modalSelect1.appendChild(this.modalOption1);
    this.modalOption1.innerHTML = '07:00';
    this.modalOption2 = document.createElement('option');
    this.modalSelect1.appendChild(this.modalOption2);
    this.modalOption2.innerHTML = '08:00';
    this.modalOption3 = document.createElement('option');
    this.modalSelect1.appendChild(this.modalOption3);
    this.modalOption3.innerHTML = '09:00';
    this.modalOption4 = document.createElement('option');
    this.modalSelect1.appendChild(this.modalOption4);
    this.modalOption4.innerHTML = '10:00';
    this.modalOption5 = document.createElement('option');
    this.modalSelect1.appendChild(this.modalOption5);
    this.modalOption5.innerHTML = '11:00';
    this.modalSelect2 = document.createElement('select');
    this.modalForm3.appendChild(this.modalSelect2);
    this.modalSelect2.classList.add('form-control', 'working-hours');
    this.modalSelect2.setAttribute('id', `editClose${count}`);
    this.modalOption6 = document.createElement('option');
    this.modalSelect2.appendChild(this.modalOption6);
    this.modalOption6.innerHTML = '19:00';
    this.modalOption7 = document.createElement('option');
    this.modalSelect2.appendChild(this.modalOption7);
    this.modalOption7.innerHTML = '20:00';
    this.modalOption8 = document.createElement('option');
    this.modalSelect2.appendChild(this.modalOption8);
    this.modalOption8.innerHTML = '21:00';
    this.modalOption9 = document.createElement('option');
    this.modalSelect2.appendChild(this.modalOption9);
    this.modalOption9.innerHTML = '22:00';
    this.modalOption10 = document.createElement('option');
    this.modalSelect2.appendChild(this.modalOption10);
    this.modalOption10.innerHTML = '23:00';
    this.modalFooter = document.createElement('div');
    this.modalContent.appendChild(this.modalFooter);
    this.modalFooter.classList.add('modal-footer');
    this.modalChangeBut = document.createElement('button');
    this.modalFooter.appendChild(this.modalChangeBut);
    this.modalChangeBut.classList.add('btn', 'btn-primary');
    this.modalChangeBut.setAttribute('id', `changeShop${count}`);
    this.modalChangeBut.setAttribute('type', 'button');
    this.modalChangeBut.setAttribute('data-dismiss', 'modal');
    this.modalChangeBut.innerHTML = 'Change shop';

    this.modalInput1.value = this.name;
    this.modalInput2.value = this.address;
    this.modalSelect1.value = this.open;
    this.modalSelect2.value = this.close;

    this.modalChangeBut.addEventListener('click', () => {
     this.name = this.modalInput1.value;
     this.address = this.modalInput2.value;
      this.open = this.modalSelect1.value;
      this.close = this.modalSelect2.value;
      this.h3.innerHTML = this.name;
      this.h4.innerHTML = this.address;
      this.p.innerHTML = `${this.open} &#8212; ${this.close}`;
    })
  }

  newItem() {
    this.modalItem = document.createElement('div');
    this.inDiv.appendChild(this.modalItem);
    this.modalItem.classList.add('modal', 'fade');
    this.modalItem.setAttribute('id', `item${count}`);
    this.modalItem.setAttribute('tabindex', '-1');
    this.modalItem.setAttribute('role', 'dialog');
    this.modalDialogItem = document.createElement('div');
    this.modalItem.appendChild(this.modalDialogItem);
    this.modalDialogItem.classList.add('modal-dialog');
    this.modalDialogItem.setAttribute('role', 'document');
    this.modalContentItem = document.createElement('div');
    this.modalDialogItem.appendChild(this.modalContentItem);
    this.modalContentItem.classList.add('modal-content');
    this.modalHeaderItem = document.createElement('div');
    this.modalContentItem.appendChild(this.modalHeaderItem);
    this.modalHeaderItem.classList.add('modal-header');
    this.modalHeadButItem = document.createElement('button');
    this.modalHeaderItem.appendChild(this.modalHeadButItem);
    this.modalHeadButItem.classList.add('close');
    this.modalHeadButItem.setAttribute('type', 'button');
    this.modalHeadButItem.setAttribute('data-dismiss', 'modal');
    this.modalHeadButItem.setAttribute('aria-label', 'Close');
    this.modalSpanItem = document.createElement('span');
    this.modalHeadButItem.appendChild(this.modalSpanItem);
    this.modalSpanItem.setAttribute('aria-hidden', 'true');
    this.modalSpanItem.innerHTML = '&times';
    this.modalH4Item = document.createElement('h4');
    this.modalHeaderItem.appendChild(this.modalH4Item);
    this.modalH4Item.classList.add('modal-title');
    this.modalH4Item.innerHTML = 'Add item';
    this.modalBodyItem = document.createElement('div');
    this.modalContentItem.appendChild(this.modalBodyItem);
    this.modalBodyItem.classList.add('modal-body');
    this.modalFormItem = document.createElement('form');
    this.modalBodyItem.appendChild(this.modalFormItem);
    this.modalFormItem1 = document.createElement('div');
    this.modalFormItem.appendChild(this.modalFormItem1);
    this.modalFormItem1.classList.add('form-group');
    this.modalLabelItem1 = document.createElement('label');
    this.modalFormItem1.appendChild(this.modalLabelItem1);
    this.modalLabelItem1.classList.add('control-label');
    this.modalLabelItem1.setAttribute('for', 'itemName');
    this.modalLabelItem1.innerHTML = 'Name of item';
    this.modalInputItem1 = document.createElement('input');
    this.modalInputItem1.setAttribute('type', 'text');
    this.modalFormItem1.appendChild(this.modalInputItem1);
    this.modalInputItem1.classList.add('form-control');
    this.modalInputItem1.setAttribute('id', `itemName${count}`);
    this.modalFormItem2 = document.createElement('div');
    this.modalFormItem.appendChild(this.modalFormItem2);
    this.modalFormItem2.classList.add('form-group');
    this.modalLabelItem2 = document.createElement('label');
    this.modalFormItem2.appendChild(this.modalLabelItem2);
    this.modalLabelItem2.classList.add('control-label');
    this.modalLabelItem2.setAttribute('for', 'itemDescr');
    this.modalLabelItem2.innerHTML = 'Description of item';
    this.modalInputItem2 = document.createElement('input');
    this.modalInputItem2.setAttribute('type', 'text');
    this.modalFormItem2.appendChild(this.modalInputItem2);
    this.modalInputItem2.classList.add('form-control');
    this.modalInputItem2.setAttribute('id', `itemDescr${count}`);
    this.modalFooterItem = document.createElement('div');
    this.modalContentItem.appendChild(this.modalFooterItem);
    this.modalFooterItem.classList.add('modal-footer');
    this.modalChangeButItem = document.createElement('button');
    this.modalFooterItem.appendChild(this.modalChangeButItem);
    this.modalChangeButItem.classList.add('btn', 'btn-primary');
    this.modalChangeButItem.setAttribute('id', `addItem${count}`);
    this.modalChangeButItem.setAttribute('type', 'button');
    this.modalChangeButItem.setAttribute('data-dismiss', 'modal');
    this.modalChangeButItem.innerHTML = 'Add item';

    this.modalChangeButItem.addEventListener('click', () => {
      const myItem = new Item(this.modalInputItem1.value, this.modalInputItem2.value);
      myItem.buildRow();
      console.log(myItem.TR);
      this.modalTable.appendChild(myItem.TR);
      this.modalInputItem1.value = '';
      this.modalInputItem2.value = '';
    });
  }

  showTable() {
    this.modalTable = document.createElement('div');
    this.inDiv.appendChild(this.modalTable);
    this.modalTable.classList.add('modal', 'fade');
    this.modalTable.setAttribute('id', `table${count}`);
    this.modalTable.setAttribute('tabindex', '-1');
    this.modalTable.setAttribute('role', 'dialog');
    this.modalDialogTable = document.createElement('div');
    this.modalTable.appendChild(this.modalDialogTable);
    this.modalDialogTable.classList.add('modal-dialog');
    this.modalDialogTable.setAttribute('role', 'document');
    this.modalContentTable = document.createElement('div');
    this.modalDialogTable.appendChild(this.modalContentTable);
    this.modalContentTable.classList.add('modal-content');
    this.modalHeaderTable = document.createElement('div');
    this.modalContentTable.appendChild(this.modalHeaderTable);
    this.modalHeaderTable.classList.add('modal-header');
    this.modalHeadButTable = document.createElement('button');
    this.modalHeaderTable.appendChild(this.modalHeadButTable);
    this.modalHeadButTable.classList.add('close');
    this.modalHeadButTable.setAttribute('type', 'button');
    this.modalHeadButTable.setAttribute('data-dismiss', 'modal');
    this.modalHeadButTable.setAttribute('aria-label', 'Close');
    this.modalSpanTable = document.createElement('span');
    this.modalHeadButTable.appendChild(this.modalSpanTable);
    this.modalSpanTable.setAttribute('aria-hidden', 'true');
    this.modalSpanTable.innerHTML = '&times';
    this.modalH4Table = document.createElement('h4');
    this.modalHeaderTable.appendChild(this.modalH4Table);
    this.modalH4Table.classList.add('modal-title');
    this.modalH4Table.innerHTML = 'Our items';
    this.modalBodyTable = document.createElement('div');
    this.modalContentTable.appendChild(this.modalBodyTable);
    this.modalBodyTable.classList.add('modal-body');
    this.modalTable = document.createElement('table');
    this.modalBodyTable.appendChild(this.modalTable);
    this.modalTable.classList.add('table');
    this.modalTableTR = document.createElement('tr');
    this.modalTable.appendChild(this.modalTableTR);
    this.modalTableTH1 = document.createElement('th');
    this.modalTableTR.appendChild(this.modalTableTH1);
    this.modalTableTH1.innerHTML = 'Name of item';
    this.modalTableTH2 = document.createElement('th');
    this.modalTableTR.appendChild(this.modalTableTH2);
    this.modalTableTH2.innerHTML = 'Description of item';
  }

  addListeners() {
    this.delShop.addEventListener('click', () => {
      this.outDiv.remove();
      num--;
      allNum = document.querySelectorAll('.num-div');
      n = 1;
      allNum.forEach((item) => {
        item.innerHTML = n;
        n++;
      })
    });
  }
}

addShop.addEventListener('click', () => {
  const myName = name.value;
  const myAddress = address.value;
  const myOpen = open.value;
  const myClose = close.value;
  const myShop = new Shop(count, num, myName, myAddress, myOpen, myClose);
  myShop.build();
  myShop.addListeners();
  myShop.editShop();
  myShop.showTable();
  myShop.newItem();
  count++;
  num++;
  name.value = '';
  address.value = '';
  open.value = '07:00';
  close.value = '19:00';
});

showMap.addEventListener('click', buildMap);

$(function() {
  $("#root").sortable({
    update: function(event, ui) {
      allNum = document.querySelectorAll('.num-div');
      n = 1;
      allNum.forEach((item) => {
        item.innerHTML = n;
        n++;
      })
    }
  });
  $("#root").disableSelection();
});

function buildMap() {
  let streets = [];
  let maps;
  let myMap;
  let myPlacemark;
  let myYmaps = document.querySelector('ymaps');

  if (myYmaps) {
    myYmaps.remove();
  }

  maps = document.querySelectorAll('.shop-street');
  maps.forEach((item) => streets.push(item.innerHTML));

  ymaps.ready(init);

  function init() {
    if (myMap) {
      myMap = null;
    } else {
      myMap = new ymaps.Map("map", {
        center: [
          53.9, 27.55
        ],
        zoom: 11
      })
    }
  };

  streets.forEach((item) => {
    let myGeocoder = ymaps.geocode(item);

    myGeocoder.then(function(res) {
      myPlacemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates());
      myMap.geoObjects.add(myPlacemark);
    });
  });
}
