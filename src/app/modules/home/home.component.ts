import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bulletinBoard = {
    titleBoard: 'Board',
    bulletinList:[
      {
        title:'myTitle',
        score:1
      },
      {
        title:'myTitle',
        score:9
      },
      {
        title:'myTitle',
        score:5
      },
      {
        title:'myTitle',
        score:1
      },
      {
        title:'myTitle',
        score:9
      },
      {
        title:'myTitle',
        score:5
      },
      {
        title:'myTitle',
        score:5
      },
      {
        title:'myTitle',
        score:1
      },
      {
        title:'myTitle',
        score:9
      },
      {
        title:'myTitle',
        score:5
      }
    ]
  };

  reviewData = {
    reviewTitle:'Lo mejor de la semana',
    reviewList:[
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      },
      {
        userImage:'../../assets/img/user.png',
        userName:'UserName',
        userAlias:'MyAlias',
        reviewName:'Review',
        reviewAbstract:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor '
      }
    ]
  };

  asideData = {
    title:"Lo más esperado",
    asideList : [
      {
      itemTitle:'Aside Title', href: '/article'
      },
      {
        itemTitle:'Aside Title',href: '/article'
      },
      {
        itemTitle:'Aside Title',href: '/article'
      },
      {
        itemTitle:'Aside Title',href: '/article'
      },
      {
        itemTitle:'Aside Title',href: '/article'
      },
      {
        itemTitle:'Aside Title',href: '/article'
      }
    ]
  };

  breakingNews = [
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    },
    {
      image:"https://i.blogs.es/66c89d/espinof_peores_carteles_2017_spiderman_homecoming/450_1000.jpg",
      title:"News title",
      date:"Agosto 19 2019",
      content:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor",
      href:"/article"
    }
  ];

  carouselData = [
    {
      cover:"https://assets.cdnelnuevodiario.com/cache/09/72/0972b5e29e1644ca5e1b93289ab4f663.jpg",
      score:9,
      title:"Lorem Ipsum es simplemente el texto",
      summary:"Lorem Ipsum es simplemente"
    },
    {
      cover:"data:image/jpeg;base64,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",
      score:5,
      title:"Lorem Ipsum es simplemente el texto",
      summary:"Lorem Ipsum es simplemente"
    },
    {
      cover:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFhUXFxcVFxcXFRcYFRgVFhgYFxUXFhcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHyUtLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARsAsgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAIBAwMCAwYDBQYFBQEAAAECAAMRIQQSMQVBE1FhBiIycYGRQqHwFFKxwdEVIzNicuEHQ1OCkiSTorLxFv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgICAgIDAAAAAAAAAAABAhEDIRIxQVEEIhMyYf/aAAwDAQACEQMRAD8A8OiqpJsBcnAHe8SPo1CrBhyCCPmOIDWUg2IsRgg8gxJoJ1msHeoGG6oyu/uqQWVtwNiLA3z9/Mxtbq1VgoLDajmoo2gAMzFicC/J4gUYTRqdarMGBYHeGDe4udwUN2wfdH8ZI3tDqDUNTcNxYOfdW24J4fw2tbaSLQMqE1E69XHBX8B+BfwVDVXt++xPreRaPq9WkxdCAS4qH3QRuAcDB7WqNj+kkUITpdC2qqaVnpuCBfTsmxf8LwXdmLHiyoRfn1ybqug6iibPDspR6I3Gn8INZnGTj/DrZ8lFu0DmYTo00+vNSptp+9qC1NrCnZmNLxCFN7AlHBFvivi/EsdJbVVqlVWqBCtPef7tW93U16O7jgbqqNbsA2MkEOVitTIAJBsb2NsG2DbznRDQa5U8JQjU9lTaytSKtS8TY7qxN9u5ufX0xBRTWbGpBRtpUvEYXQbaVcUnDXJ7/wB0fPPqYGFCag6/X81+Ld8C/Eafhf8A1v8AXPMh1HVqrp4bMNoRKdrAe6huv1HnIFN0ItcEXAIuLXB4PyiKpJsBcnAA5JmieuV9u3cNpRaZG1SCiMXVcjgFj9DaObr9c395ciqPgX/nMHqdu5A+UDLIhLmn6pVRPDVvc3FrWB94qUObX4Y4vbvJx16vcHcMFDlV5pm6Xx2/MYN4GZCWtb1CpVCByDsXatgBZSS1sc5JycyrAIQhAIQhAIQhAIQhA09B0xKlGpVNZVNP8BA3NwRtuwvw/wAto8xH6roFSmXDPS9zdezE32imTtsM/wCMv2bymTFIkjqk02po0fDD0kQVKm9kJdmbYUG9WxsIqbBYC+7vbFrU/txqCmurR7NUtvCLZm/at1wQfiVap9RVp+luKi2gdK/7YwVWrptq+FggEDfTIp8J7llrsmOOB8OIqtHVFK9c1qb+JTHikkF6iFkcYK3JuqG4zdTc3Btz9oWgdF+16ulRV/GpbFpoiramW2VD4gSxTOVub+R9ZrVNPWVLLqBmgu59lFkqUkp6c7FULuIUtRQMb38NzggicPFAgb2j6AjVjSNQtaklTaoCMXqNTAp3fC7RVDMSDYI3leFf2cRS3/qUKhXcMFJDIrBVYWP4gycXySOVNsEiIYCQhCQCEIQCEIQCEIQCEIQCEIQCLEiiSCEI4QEtHqjdhLOnogepmhQpzO5tseP7Zf7I/Now0yOQZ09LRsReRajTkciR51a8cczEM1qumHJEzqyWMtMts8sLEZEQiKI5aRMttWY2o7RJP4BjWomPKJ8KihFIiQoIQhAIQhAIQhAIQhAIQhJDhJaIkMnpyuTTD2uaUXm903TXImFpzkToum1rETL5dEdd0rpeLkY8/wBdpD1vpIAOMyxoerWUC9uL/Lt8o7W9RBUg8zTrSne3nfUBtvMFjuM2/afUDcQO8ytKmZWdF7uj9Npbza0nTr9pJ0/TX7Tqel6MGV7q3pytfphHaZtbTW7T0zqHSxtvYTidfRsxkXpadub1FCUyJs11mZqVzNMKx5MUEIQl2AhCEAhCEAhCEAhCEBRLOnUk2AldZY0tfbK5NcGnR0jdwZt6XTsFBmTpeoKQQzbfXkfURtTrDKbAgji4JOJnJW243U1W3z/X1kdXX4JvMZdUW7ytrtQQtu5je7ovU2pausXcmT6JlBuxAlajTvN3o9CmpyA3HOZa2elMZfbW6S6v8OZ1vT6VheZWu0FE0gwpAN+8t1N/WxF+Zh0ur6uiSBU8RfIgXH9Y0nddnrdabWnFdROTLK9TaqL7SD5epmZq2zM8q0xZ2oaZ2oM0a9MmZtcS2CnIrwhCbOUQhCAQhCAQhCAQhCA9I+pSIhphmben6f4ot+crldVtjjvFNsoac0N4fY6l3qoNz3AwiKzBQu61+9jzLfXfZ0tR0+opqwNVVNRCCSjtgHcclGJHxEkbhnOKC6XW0RtUblBuBYMuO+1sfcS1U1OqN3rVDexAA7XFvoPQflHwiTtidNQk7bHm3rHdaoFXCnmbHQqP96GPdtxJ8ybmVva1g2qNrWsP1+UpPe2tnWlWnoSUG0i/lKmjp1aj7EazWJ528ZsT2OJ0fRtHutL9fpwG7YFSowy+0E/nJxqM8bXGL1XULjxXxixYkfYy703Wl2zzGVuhVQTy1z8Vv4yz0zpxpl2fJ2FVH+c2tx5ZlrpljMttygLput+vKYeq1QBM6XRsq6VgeQJwerqEsZnMd1vcvGJHrOTgyGqWGGhT1RHYfzjKlW80kY3KfaOEISzIQhCAQhCAQhCAQhCA6m1jOj6PqbETmpd0eoIlM5trxZfD0ygEqKA1rEgG+ByLi/bvOf8AaGqiXtKNPqBNMjd5RnWqTeGtW27IJHkCDmV3b02up2TpdUk3A4lDrTnx84wOfrF6V1xqNTeqj5EXH2Mg6v1E16xqGwJtwLDETHSLlLOnV+yje8J0/WdICLgWnD+z+r2kTuG1gZBCWUmkXvmZuuQbs4A7y9qddYkKOLknsABck/Sc6Kh1DFmqrTH4Q2Bb5DvK/C2+1rU1V22E5goCxB9Z1NXpamjvSqpINivf5jzE5dltUIk49Iz7itUpW7j9fORzSq0QRxM+oMzSZbc+eHibCEJZmIQhAIQhAIQhAIQhAIoMSEEaWiq4M1v288A/r1nOU2PF5pDpu4ArWBvxcWP1ybGZ2OmZNal09WUs7UgMfEGKi/mVFx87GYPVaSLVIQqRbOwkrf0LAX+02NL7NVMGo5QEXDEHYf8AvAI+8zOtdMNEg3LKSRusQLjsCQL9/tLSK5W/RNDUIPM7HpeqBFifnOH03abdNGKMQ22xv8/IfKVsWldY5pbTa3rOL1XTaQJybfhzxnj1gutcfGLjzBO0/bM29L1/SBCG01Hda1yoN/nuF/ziJs+3L1ar0htBup4I/XMh0WXzmS9TrKzHYu1DkKDcA97X7ekq0KtjeTrpX1Yu6trC0zGMlr1rmQycZpTky2IQhLMhCEIBCEIBCEIBCEIBCOUXkr0pG18cLZtEpkgcjMiIljTV7YMVON+Gn072lrURZWa2LjBBsQRcH1AkHWuvVdTbxGJsb+l/lxNDR66iF96kp+ky9fVQ3KqB8pWL2X7VKNSxnQaepdLTA0dFncKoJJNgBOz6X0F7DdYG9rHztiw/Eb2xiV5MpiccuUYumR1NxTLqDcjt65m0epU1Ktp6ThfxI+0pcjO0m5HbtxOgSjRQXybqyOcrtan/AJD5knI/pOO6j1AUropBsbAjuv4T87G3zErhnv8Axrl1FXX6BqrmptVA3Krxf+Up0+lEutMMLsbA9uLxH6w9rAWlNtSxNyc8zT9mNuB/UNG1J9rEHF8eUrR1RyTc8xsvGV1voQhCECEIQCEIQCEUCPVPOFpjaYFvJk057yzSQdpOiylydvF+JL3VWnR/r9pJtkhGLjmKADkfbyPlK7dOPFJ0qVqMqkTUZJUrUpbHJy8/B8xW3GJHMhEtdNobmueBn69pa2Sbckxtum70XQkVkpA2ICszDGWAc38wAQPvO01VDxFurbWJU39VOGHkczj+lVbOA1+bHzNhjPfi00H6o7FAoY8blxtN8bVxfA7nk84xOXKXKuuaxmmprOkVjZauosSCfdX3jbnNiL58s9u8zF9mKNyxLMSoYGoTYseQw5BAtyO8u9UqVkAK3YYxyR6YyfQ+sy6lau3/ACqh55ByCb97C38pWW/CbJ8sX2l6QtJ70/hIBtza4zb0uDMKbXtA1ZdoqIUUrZeDcA3PH+r85izqw3rtx8mvLoQhCXUEIQgEIQgLaPRLwVZMiYkWtsOPZUW3IlhLGR027H/9j2S2RKV3cf6zr0Cm3PaWKZiCxEiW6m32lPbon6Xr0mpiBpAG447iCxbmQ01NEKHt94iUh8z3jVqBcHAOQfLzEjqagtcUxjuT39JOqzyzxnv39G6lRxyf4fOWOnJYZHJvfyisosNoGQD+vrCj1UHFSndfPuJFts1HJzeOOfa3UuSCvYY4xxYfr+k7H2TSnUBNRgGUEqD3PYZNu/YCcsujGGU3ptlODnHJ8wRj5SWnrXG+mTY4G4Dgjj0z+WPSZq3ta1nVA1Xw9pJ3hQ44334U/Ow49MR9XrAyu8ki17495cg2A8z2HaJpOkoRTI+JCDtGRdcgt5C/N88gXMbqUpK9yASfwm27A5+f9ZXKYy9Im2H7Qa7fTCmwIcEfIhtxH1nPze6/qU27FpotyDZVFsXs1/Mg/q8wgJ1cX9XNyf2EUCOAkiJL7TjhtFtiESzsjWpyNrXiVoRTCWYaWBJaYvxzGKwMlCzOu7A4Ur4+o/mJLRyLGLTa/wAxJdnDCUtdeGM9xHQ7g9sQqpdfVY98MD54kls/PH2kb7a+O8dGafOZMUErtTKm44kiVD3kWLY5fFNq05DtluItQKb2/wBrnm/3iVXk1Js/TaZwLjnO0Wvm2L/Ww+8g0NIEDyM2unqHqbWbaosCb2Axkn5A/lJendJ8Qva6NZKnFxaooOV/1h+LSsy+3n593bP6e4ovtb/Ac2fvsJwKi/LuO4+hDtTR8Oo6H4QeNw+IXDZHIJF5H1VDTFQPtIHu3T3lJPGTYjjy+8p0Ky1l999r5APrcnPpn8pfKb7UxuumuOumirADcQLrfN72AuO4GZg1FdUetVLB3sKYbDElgzPY52ixHzb0MratKikBu1yrXwRzg/SU3ck3JufWWwwkjLk5OyFieY9RGCTUxNarhN0qLJlWCLJAJS12cfGQLGOM/STKJGwz9Ia54dKeyEsBIsttyfwmlAY+k9jY/Q/yMaDJbAixlWmM73PaUgjIlihU/r/X85TQsMHP8fmPP5R5NiD2OPvK2OjDPXaxVdWB2nIsbSQ8fLP2lNWs49cH6y9S4t5Y/pK3pvx5eW9pCt5Cy2MlGQPlFtcX7yrbWzbShqTc2+8vVWsLmZwzmWxc/wCTu4+MWtBUQMBVYgevwNbjdxnHc2P8el6Zrt9Ws9M3HhpT3W/EXZvd89oJ+055KAKi4uJbp6hqKDZawYf6rc47H+POfKcsN9x50uuqT2qb8FM+6mGBvZnJyQTzxYf7mcqxnRVOoUi//cD9Abk+swK9TcxawF+w4Etx713GXLr4phY+cSEBNWJyiWqayGkstIspa7ODDZyCSbYII8jEpa9HHHURqJG3xfSTJK1drH5iTPbPlvjjtEdR6Qjd3pCXcPll9pQY9TK4qCTIRIq2GUqymYjJ9QfuPX1kYceclRpV0Syq9Y9z+iJpUmyD5j8xKlahuGOfyj9BUuADyptIvcW4t456vyurwI9DIWbj5xmorbRjngTPW3X5THszUMWcIoJzawySxwABJl6dY2evRRv3WZ2Izb3mpoyqfQkW72m//wAPPZoapq7vV8GlQQNWrd0ptuLlf85VGAPYEnNgCaj2t0VJ9mi6XpTSGA+rRq9Z7fiPvAJf90XmsnTgz5bc9T2yNTpatDb4ie64urBgyMOCUdbqw7GxxIdZXDBQARb5T0jS1tFruk6809OKFaiq6hqaEmkGS58akrfBuVWRgOwHOJy//CPpiazqCLUQNSpq9V1cAqyqNouDi251+0dmV47vymrHCamjnANpE9K02Ovamm9eq9JQtNqlRkUCwVCxKKB2AFhMeq2ZbG1y8uGGKOPRY0CWKKy1rPjx3UlOnJ1iKI/bM7XqcfHqdJFERzHrInlJ7b30BxKGpPvS6zYlO92mmLj/ACbuTEo0/rCWL+kI3T+HBTWG0jIiCPBlnFNAVv3hJkUHiRiJ4fcG0hpLZ/qyvzMcjWa/ng/ylZK3YyQyLG2Of0t1qnHzlZ6t29O0gNQ2I7iPpsDxI8dJvL5XT0foLn/+a6js+P8AaaYe3xeFeh5dvi/OeeUkJZVUEk+6ABckk2AHmSZteyXtPV0D1NqJVo1V2V6FT4KtM3tc9jZmsc/EcGbOg9r+l6eoK+l6W/jrmn42oZ6NJuzBbXe3a5v6gy3th5XDK9d13Xsz7LVOmaHq7ahqbMaBpjw2LL/hOwUllBDHxUxby85yvsCDpuk9U1gwSiaWmRhg1TD2/wDdpn6Ta9r+rVE9n6JrNur6+t41Q8XXd4oIHkFWgoHYWlH2koNpfZrSUzhtRXFVu11ZXqLf6LT+0Il63l7teddP6WawqVGcU6NIKatRgxC722ooVQSzsb2HobkAXljq3suU0dPX0avi6epUakbrsq06i392ogZgAQtwQxwRe1xNL2C9oKekNVNZpjW0OrApVfdPxUjdWQ9yu/IBBFwQbgXX/iD7NjRLSfS6lq3T9VerS9423Jgh1wCwDWBIB5FhYy0jHkyuWTjEEuU1laiJcWVydX4+PyUSXdIbw3SljtmWkgaMZowNEJk6Uy5Oja7yBWzG1DcxKfMvpwZclyyXAfWJCEq6e1W8UGNvEl3DtMDHbpADF3GRppM0xMRTbvI1UnzMk8Mj8J+xhPkQnMc5HMiYEHII+YtG2vGkef0WpVJx2klIWjQMi0mCN+4f/E/rtBj73a9r6n0zS67pvS9RU1CLQ0lBUr3cYKrSV0K5ZmvTICjLXAxe4f1zSVes9N0NSmEVRqqpZGqIhp6QValNWNyL7EVQbZPYTxEof3D9j/P9Zl6h1lxRGneklamrmoi1Fe9J2AD7GRlIVrLdSSt1BtfMmKZTXy7P2j9oen7anTPDqjQU64raatRs9TClKgHikB0ZzVIe/wBCLW5r2u9p11KafTUKZp6XTBhSViC5L23M9sXNuM5LG+bDn9bWd2Lve5sONoAAsoAGAAAAAOAJFTEKYztYpCTXjEQ+R+xhnyMpXfhlMYfeNJiWPkfsYx7jkERovIFaI7yMGIxk6Y3PoyOpRhMehlmOPtY3QlYvCRpr/KWlTLGyi5Pb85Y/syt/0z+X9YnSmYVVKqXObKOTdSMTerdQdP7xtPUVS265GL2uL+XxSzm2wU0FU8Ie45FsEg9/MGKdBVAuUNr2vjknb5+eJu9Kq76ZKgWBcG5tbc2+9gD2NvvIdTrdy7bXIbkbiuKhbkL62jSdq/RtO6VNzIbWI7XuT5fQ/aar6i9mAbDWJtxdbY8z70pVetKDcqfiGBjKkmxuAfxCVU6hURmYo/htYgZC3utj5ZA/OEW7adZ1YqGQn3bAMt84a9j6AyLT06W9x4QvcEDYDZSFt+YaT6ao1UJUVBYFjls/CVN8Y7mFFSGY+HuLeTWNgFwcdrwQ16aDijkWzsAsbn7f7R1bWBCGa4Xj6kYNibxNZrWRS5W6k7cMSb58x6flI2JrBH8MFbhipPIsw8vM/lCdpKGtDEsu4qGY4B7qMG/lj7x2jbazHY1y177ecH+ojaN1DIKQAuDhsAuFW/Hmv5xmr6l4VtyfFxZr9gTe49RCErPvADUywVs3AIsEOTf/AFCQtRTctqVrNyEAIsUYfr1ktOlVSo24CzkAKH4IBvfHfaRJK28bm2C2X+O5C+6O49IJTdRqwbYI3WUEg2ueALeoMrVKZUNZCp2OpIHLnbt/n95Yem3uAoCFbd8XcKwxYYN8/SVn6uCdgpsWBz717kMCf4WkLbXP2g3A2tzYY/yX/j/CZnWwz7SFb4iuce8dosPqDLR1j3X+4fBJ7XJIIMh1OvwrNRbar7skWzfy73Iko2y/7NrD/ln8v6yN9DUyNhwQDxyeBOj0+u8Qb1pkDBy3bI/lGVQ5ZrAfEjn3sWUkWGMm4jSfJz/9m1f3D9x/WR6jTumHW1/5czpVrMzkeGfc3C/Ym4Hu4uTz95j9d1ZdgChQqW5/zH8+OYV2y4QhCEmnrsjBkNmF7EeosfyJlit1Ws24NUYh7BuM2lOEDV6R1RaKsCGuxza3FrWzx3i0tfTW+01gCSxA2cn5iZMIFrW1Ua23fe5JL2yTbi3ykLVmICk4HAkcID6NTawYdiDnjBvmaa9fqDG1eLd/vzjiZMIGo3WSw2siEZPfk3t39YUOtOqhQi2AA73x9fOZcIGqeuvn3Ezt8/wG47yOv1QupDIpNrKcnbe1yLnyAmdCA6m1iD5EH7TUqddc3/u0zbsfljMyYQNdvaCofwr/APL19fWZzalt5cHaSb4Jx9ZDCBa/tGt/1X/8jGVNXUYbS7EeRJt9pBCBr9O6qtNNpDX4NgOLtx7wz70sP1umTezcWOB+9uuPe9W+8wIQNGr1Q+IzLezX5JuA3xAZxyZSr1ixub/cn+MjhAIQhA//2Q==",
      score:1,
      title:"Lorem Ipsum es simplemente el texto",
      summary:"Lorem Ipsum es simplemente"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
