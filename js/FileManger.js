App.FileManager = {
    space: "________",
    breadCrumbs: [''],
    //dat: new Date(),
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    fs: [
        obj1 = {
          name: "MyDoc",
          type: "folder",
          date: new Date("2015-11-10"),
          files: [
            obj11 = {
              name: "MyPictures2",
              type: "folder",
              date: new Date("2016-11-10"),
              files: [
                obj111 = {
                  name: "MyVideo30",
                  type: "folder",
                  date: new Date("2015-05-12"),
                  files: []
                },
                obj112 = {
                  name: "MyFiles4",
                  type: "folder",
                  date: new Date("2018-10-06"),
                  files: []
                },
                obj113 = {
                  name: "Doc13",
                  type: "file",
                  date: new Date("2019-01-10")
                },
                obj114 = {
                  name: "My2oc",
                  type: "file",
                  date: new Date("2017-10-25")
                },
                obj115 = {
                  name: "Photo",
                  type: "file",
                  date: new Date("2018-12-10")
                }
              ]
            },
            obj12 = {
              name: "MyVideo3",
              type: "folder",
              date: new Date("2019-02-10"),
              files: []
            },
            obj13 = {
              name: "MyFiles4",
              type: "folder",
              date: new Date("2018-11-10"),
              files: []
            },
            obj14 = {
              name: "Doc13",
              type: "file",
              date: new Date("2015-11-09")
            },
            obj15 = {
              name: "My2oc",
              type: "file",
              date: new Date("2015-11-26")
            },
            obj16 = {
              name: "Photo",
              type: "file",
              date: new Date("2015-03-10")
            }
          ]
        },
        obj2 = {
          name: "MyPictures",
          type: "folder",
          date: new Date("2019-03-10"),
          files: [
            obj21 = {
              name: "MyPictures2",
              type: "folder",
              date: new Date("2017-10-10"),
              files: []
            },
            obj22 = {
              name: "MyVideo3",
              type: "folder",
              date: new Date("2000-10-11"),
              files: []
            },
            obj23 = {
              name: "MyFiles4",
              type: "folder",
              date: new Date("2015-11-10"),
              files: []
            },
            obj24 = {
              name: "Doc13",
              type: "file",
              date: new Date("2013-11-10")
            },
            obj25 = {
              name: "My2oc",
              type: "file",
              date: new Date("2010-01-10")
            },
            obj26 = {
              name: "Photo",
              type: "file",
              date: new Date("2001-11-10")
            }
          ]
        },
        obj3 = {
          name: "MyVideo",
          type: "folder",
          date: new Date("2012-01-25"),
          files: [
            obj31 = {
              name: "MyPictures2",
              type: "folder",
              date: new Date("2016-02-15"),
              files: []
            },
            obj32 = {
              name: "MyVideo3",
              type: "folder",
              date: new Date("2010-02-14"),
              files: []
            }
          ]
        },
        obj4 = {
          name: "MyFiles",
          type: "folder",
          date: new Date("2016-02-15"),
          files: [
            obj41 = {
              name: "Doc13",
              type: "file",
              date: new Date("2000-09-10")
            },
            obj42 = {
              name: "My2oc",
              type: "file",
              date: new Date("1999-02-15")
            },
            obj43 = {
              name: "Photo",
              type: "file",
              date: new Date("1998-02-15")
            }
          ]
        },
        obj5 = {
          name: "Doc1",
          type: "file",
          date: new Date("2016-05-19")
        },
        obj6 = {
          name: "MyDoc",
          type: "file",
          date: new Date("2019-03-15")
        },
        obj7 = {
          name: "Photo",
          type: "file",
          date: new Date("2016-02-15")
        }
    ],
    curentFolder: [],
    pageBody: '' +
        '<div id="bread-crumbs">/</div>' +
        '<button id="back-folder" onclick="App.FileManager.backFolder()"><b>To<br>up</b></button>' +
        '<button id="show-all" onclick="App.FileManager.showAllContent()">Show<br>all content</button>' +
        '<button id="show-dir" onclick="App.FileManager.showAllFolders()">Show<br>folders only</button>' +
        '<button id="show-file" onclick="App.FileManager.showAllFiles()">Show<br>files only</button>' +
        '<button id="add-dir" onclick="App.FileManager.addNewFolder()">Add<br>new folder</button>' +
        '<button id="add-file" onclick="App.FileManager.addNewFile()">Add<br>new file</button>' +
        '<button id="show-files-created-after" onclick="App.FileManager.showFilesCreatedAfter()">Show files<br>created after</button>' +
        '<hr>' +
        '<div id="main-fild"></div>' +
    '',
    backFolder: function(){
        if (this.curentFolder.length > 1){
            this.curentFolder.splice((this.curentFolder.length-1), 1);
            this.changeBreadCrumbs('');
            this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'All');
        }
    },      
    showAllContent: function(){
        this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'All');
    },    
    showAllFolders: function(){
        this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'Folder');
    },    
    showAllFiles: function(){
        this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'File');
    },    
    addNewFolder: function(){
        let newName = prompt("Enter name of new folder" + '. Remember: do not use "space"!', "new_folder");
        if ( newName != null && this.isNotDouble(newName + "-folder") ) {
            let newObj = {
                name: newName,
                type: "folder",
                date: new Date(),
                files: []
            };
            this.curentFolder.push(newObj);
            this.showAllContent();
        }
    },    
    addNewFile: function(){
        let newName = prompt("Enter name of new file" + '. Remember: do not use "space"!', "new_file");
        if ( newName != null && this.isNotDouble(newName + "-file") ) {
            let newObj = {
                name: newName,
                type: "file",
                date: new Date()
            };
            this.curentFolder.push(newObj);
            this.showAllContent();
        }
    },    
    showFilesCreatedAfter: function() {
    let date = new Date(prompt("Please enter date in format YYYY-MM-DD.", ''));
        if (date != null) {
            document.getElementById("main-fild").innerHTML  ='';
            for (let i = 0; i < this.curentFolder[(this.curentFolder.length-1)].length; i++) {
                if (this.curentFolder[(this.curentFolder.length-1)][i].type == 'file' && date < this.curentFolder[(this.curentFolder.length-1)][i].date) {
                    document.getElementById("main-fild").innerHTML  +=
                        this.codeGenerator(this.curentFolder[(this.curentFolder.length-1)][i].name,
                        this.curentFolder[(this.curentFolder.length-1)][i].type,
                        this.curentFolder[(this.curentFolder.length-1)][i].date);
                }
            }
        }
    },    
    openFolder: function(idtype) {
        let boo = true
        let i = 0;

        while (boo) {
            if ( (this.curentFolder[(this.curentFolder.length-1)][i].name + '-' + this.curentFolder[(this.curentFolder.length-1)][i].type) == idtype ){
                this.changeBreadCrumbs(this.curentFolder[(this.curentFolder.length-1)][i].name);
                this.curentFolder.push(this.curentFolder[(this.curentFolder.length-1)][i].files);
                boo = false;
            }
            i++;
        }
        this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'All');
    },    
    rename: function(idtype) {
        let newName = prompt("Enter new name of " + idtype + '. Remember: do not use "space"!', 'new name');
        if ( newName != null && ( this.isNotDouble(newName + "-file") || this.isNotDouble(newName + "-folder") ) ) {
            let boo = true
            let i = 0;
            while (boo) {
                if ( (this.curentFolder[(this.curentFolder.length-1)][i].name + "-" + this.curentFolder[(this.curentFolder.length-1)][i].type) == idtype) {
                    this.curentFolder[(this.curentFolder.length-1)][i].name = newName;
                    boo = false;
                }
                i++;
            }
            this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'All');
        }
    },
    delete: function(idtype){
        let areDelete = confirm("Do you realy want delete " + idtype + "?");
        let i = 0;
        while (areDelete) {
            if ( (this.curentFolder[(this.curentFolder.length-1)][i].name + '-' + this.curentFolder[(this.curentFolder.length-1)][i].type) == idtype ){
                this.curentFolder[(this.curentFolder.length-1)].splice(i,1);
                areDelete = false;
            }
            i++;
        }
        this.loadContent(this.curentFolder[(this.curentFolder.length-1)], 'All');
    },
    changeBreadCrumbs: function(name){
        let string = '';
        if (name == ''){
            this.breadCrumbs.splice( (this.breadCrumbs.length-1), 1)
        }
        else {
            this.breadCrumbs.push(name);
        }
        for (let i = 0; i < this.breadCrumbs.length; i++) {
            string += this.breadCrumbs[i] + '/';
        }
        document.getElementById("bread-crumbs").innerHTML = string;
    },    
    loadContent: function(curentFolder, contentType){
        document.getElementById("main-fild").innerHTML  ='';
        for (let i = 0; i < curentFolder.length; i++) {
            if (contentType == 'All'){
                document.getElementById("main-fild").innerHTML  += this.codeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
            }
            else if (contentType == 'File') {
                if (curentFolder[i].type == 'file') {
                    document.getElementById("main-fild").innerHTML  += this.codeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
                }
            }
            else if (contentType == 'Folder') {
                if (curentFolder[i].type == 'folder') {
                    document.getElementById("main-fild").innerHTML  += this.codeGenerator(curentFolder[i].name, curentFolder[i].type, curentFolder[i].date);
                }
            }
        }
    },    
    codeGenerator(name, type, date){    
        var string = "<div id=" + type + name + " class=" + type + ">";
    
        if( type == 'folder' ){
            string += "<button onclick=App.FileManager.openFolder('" + name + "-" + type + "')>Open</button>";
        }
        else {
            string += this.space;
        }
    
        string += this.space + name + this.space + this.space + date.getDate() + "-" + this.monthNames[date.getMonth()] + "-" + date.getFullYear() + this.space +
            "<button onclick=App.FileManager.rename('" + name + "-" + type + "')>Rename " + type + "</button>" +
            "<button onclick=App.FileManager.delete('" + name + "-" + type + "')>Delete " + type + "</button>" +
            "</div>";
    
        return string;
    },    
    isNotDouble: function(newName){
        for (var i = 0; i < this.curentFolder[(this.curentFolder.length-1)].length; i++) {
            if( (this.curentFolder[(this.curentFolder.length-1)][i].name + "-" + this.curentFolder[(this.curentFolder.length-1)][i].type) == newName){
                alert("Can't create/rename - "
                    + this.curentFolder[(this.curentFolder.length-1)][i].type + " "
                    + this.curentFolder[(this.curentFolder.length-1)][i].name
                    + " exist! Please type another name." );
                return false;
            }
        }
        return true;
    },
    preparePage: function(){
        App.FileManager.curentFolder[0] = App.FileManager.fs;
        App.FileManager.showAllContent();
    }
}

App.selector['#file-manager'] = App.FileManager;