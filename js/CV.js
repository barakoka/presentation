App.CV = {
    connectionParams: {
        hash: '#cv',
        title: 'My CV',
        name: 'CV'
      },
      translit: {
        information: {
          headText: {
              EN: false
          },
          bodyText: {
              EN: 'It\'s My CV'
          }
        }
      },
      cvInfo: {
        aboutMe: 'Here will be information about me',
        langSkils: {
          English: 3,
          Ukranian: 5,
          Russian: 5,
          Polish: 4
        },
        contacts: {
          // add information
        },
        followMe: {
          Linkedin: 'www.linkedin.com',
          Facebook: 'www.facebook.com',
          GitHub: 'www.github.com'
        },
        workExp: [
          {
            title: 'Junior Front-End Developer',
            office: 'Keepit.com',
            dateFrom: '05/2019',
            dateTo: '',
            description: '',
          },
          {
            title: 'Leading Specialist of Road Safety and Traffic Management',
            office: 'Transport office / Lviv City Council',
            dateFrom: '06/2016',
            dateTo: '05/2019',
            description: '- participant of Lviv Road Safety Committee<br>- projects coordination of road safety improvements within Lviv<br>- implementing of City`s road safety and traffic management action plan<br>-making proposals of public transport priority<br>- benchmarking of best practises road safety and traffic management<br>-advising City`s Government on road safety and management issues in traffic<br>- participant of project group for short-term sustainable urban mobility plan',
          },
          {
            title: 'Specialist of Road Safety and Traffic Management',
            office: 'Transport office / Lviv City Council',
            dateFrom: '11/2015',
            dateTo: '06/2016',
            description: '',
          },
          {
            title: 'Manager',
            office: 'Shop “Cyfrovychok.ua”',
            dateFrom: '07/2011',
            dateTo: '10/2015',
            description: '- Consultant sales<br>- Photographer<br>- Photostudio Administrator',
          },
          {
            title: 'Teacher / System Administrator',
            office: 'Lviv College of Light Industry',
            dateFrom: '01/2009',
            dateTo: '07/2011',
            description: '',
          }
        ],
        edication: [
          {
            title: 'MA in Law',
            univerName: 'Ivan Franko National University of Lviv',
            dateFrom: '09/2014',
            dateTo: '04/2018'
          },
          {
            title: 'MA in Computer Programming, Specific Applications',
            univerName: 'Lviv National Polytechnic University',
            dateFrom: '09/2006',
            dateTo: '12/2011'
          }
        ],
        profSkils: [
          // Add skils
        ]
      },
      getAboutMeHTML: function() {
        let text = 'This is a text about me :)';
        return '' +
        '<div class="about">' +
          '<p>About me</p>' +
          '<p>' + this.cvInfo.aboutMe + '</p>' +
        '</div>';
      },
      getLanguageLvlHTML: function() {
        let keys = Object.keys(this.cvInfo.langSkils);
        let langList = ''

        for(let i in keys) {
          let key = keys[i];
          langList += '' +
            '<div>' + 
              '<div class="lang-name">' + key + '</div>' +
              '<div class="lang-rate">' + this.cvInfo.langSkils[key] + '</div>' +
            '</div>'
        }

        return '' +
          '<div class="language-level">' +
            langList +
          '</div>';
      },
      getContactMeHTML: function() {
        let keys = Object.keys(this.cvInfo.contacts);
        let list = ''

        for(let i in keys) {
          let key = keys[i];
          list += '' +
            '<div>' + 
              '<div class="contact-icon">' + key + '</div>' +
              '<div class="contact-link">' + this.cvInfo.contacts[key] + '</div>' +
            '</div>'
        }

        return '' +
          '<div class="contact">' +
            list +
          '</div>';
      },
      getFollowMeHTML: function() {
        let keys = Object.keys(this.cvInfo.followMe);
        let list = ''

        for(let i in keys) {
          let key = keys[i];
          list += '' +
            '<div>' + 
              '<div class="follow-me-name">' + key + '</div>' +
              '<div class="follow-me-link">' + this.cvInfo.followMe[key] + '</div>' +
            '</div>'
        }
        
        return '' +
          '<div class="follow-me">' +
            list +
          '</div>';
      },
      getWorkBlockHTML: function(type) {
        let htmlStr = '';
        let historyList = '';
        let header = '' +
          '<div class="skils-header">' +
            '<div class="skils-ico></div>' +
            '<p>' +
              (type === 'workExp' ? 'Work Expiriance' : 'Education') +
            '</p>' +
            '<div class="skils-line"></div>' +
          '</div>';
        
        if (this.cvInfo[type]) {
          for(let i in this.cvInfo[type]) {
            let item = this.cvInfo[type][i];
            historyList += '' +
              '<div>' +
                '<div class="item-head">' + item.title + '</div>' +
                '<div class="item-head">' + item.office + '</div>' +
                '<div class="item-head">' + item.dateFrom + ' - ' + (item.dateTo ? item.dateTo : 'Present') + '</div>' +
                (item.description ? ('<div class="item-head">' + item.description + '</div>') : '') +
              '</div>';
          }
        }

        htmlStr = '' +
          '<div class="work-and-edication">' +
            header +
            historyList +
          '</div>';

        return htmlStr;
      },
      getProfSkilsHTML: function() {
        return '' +
          '<div class="prof-skils">' +
            '<div class="skils-header">' +
              '<div class="skils-ico></div>' +
              '<p>Professional skils</p>' +
              '<div class="skils-line"></div>' +
            '</div>' +
          '</div>';
      },
      loadPage: function(){
        document.getElementById(App.palce).innerHTML = '' +
          '<div id="cv-body">' +
            '<div id="main-list">' +
              '<div id="left-column">' +
                '<div class="cv-photo"></div>' +
                this.getAboutMeHTML() +
                this.getLanguageLvlHTML() +
                this.getContactMeHTML() +
                this.getFollowMeHTML() +
              '</div>' +
              '<div id="right-column">' +
                '<div class="my-name">' +
                  '<p>Kostiantyn Baraniuk</p>' +
                  '<p>Frond-Fnd Developer</p>' +
                '</div>' +
                this.getWorkBlockHTML('workExp') +
                this.getWorkBlockHTML('education') +
                this.getProfSkilsHTML() +
              '</div>' +
            '</div>' +
          '</div>' +
        '';
      }
};

App.selector['#cv'] = App.CV;