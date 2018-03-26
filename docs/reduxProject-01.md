---
id: reduxProject-01
title: Redux List Produk
---

![alt text](https://res.cloudinary.com/telecreativenow/image/upload/v1520184960/Screen_Shot_2018-03-05_at_12.35.32_AM.png "Redux List Produk")

## About Project

Project ini memberikan kita contoh tentang bagaimana mendapatkan data produk untuk ditampilkan dengan list di UI React dengan menggunakan Redux, selain itu, kita juga akan mengubah komponen yang di klik untuk di view menggunakan Redux juga. Tahapnya memang agak sedikit merepotkan, dan harus melalui prosedur yang strict dan tidak boleh terbalik-balik.

> **Attention**
>
> Harap mengikuti semua prosedur/tahap secara berurutan dan dibaca dengan seksama, agar tidak menemukan error kedepannya.

## Install Redux

Tahapan menginstalasi Redux bisa dilihat [disini](http://google.com/).

## Main Folder

Pada project Redux pada umumnya kita memiliki 3 folder utama yang sangat berguna pada setiap step yang akan kita bangun menggunakan Redux. Berikut folder yang harus ada pada Redux.

> **Attention**
>
> Jika belum ada, harap dibuat seperti dibawah dengan menggunakan `create-react-app`.

```
root-of-repo
├── node_modules
├── public
└── src
│   └── actions
│       └── index.js
│   └── reducers
│       └── index.js
│       └── reducer_active_product.js
│       └── reducer_products.js
│       └── reducer_recommended.js
│   └── components
│       └── App.js
│       └── product_detail.js
│       └── products_list.js
│       └── product_recommended.js
│   └── index.js
├── package.json
├── package-lock.json
```

Sekarang kita fokus dengan folder `src`, karena kita akan menyibukkan diri disana untuk kedepannya. Didalam folder ini terdapat 3 folder utama yang kita bahas sebelumnya. Yaitu folder;
- **actions**
- **reducers**
- **components**

Selain folder, ada satu file induk yang menjadi root pada aplikasi yang akan di running di browser, yaitu `index.js`.

Mari kita perdalam sedikit mengenai 3 folder utama ini;

- **actions**
 ini berfungsi sebagai folder yang menyimpan semua perintah fungsi-fungsi untuk mengubah data yang ada di redux. Perintah di dalam actions sama halnya seperti CRUD di programming backend. Jadi disini kita bisa bilang, bahwa redux adalah fungsi backend yang berada di dalam frontend.

- **reducers**
 berarti dalam bahasa Indonesia adalah peredam. Peredam maksudnya disini adalah, suatu object yang menyimpan semua data dan proses data yang akan dikirimkan ke frontend/UI. Selain itu ada file `index.js` yang berguna untuk menggabungkan semua object reducers kedalam satu root yang nanti akan dikonsumsi oleh UI.

- **components**
 yang sudah kita ketahui, yaitu sebuah folder yang menyimpan semua UI yang bisa kita gunakan secara modular di ReactJS.

## Build The Code

Sekarang kita mulai tahapan-tahapan untuk menampilkan data dengan redux di UI komponen.

Pertama, kita fokus dengan komponen utama, yaitu list produk. Seperti biasa, kita membuat UI nya menggunakan framework UI yang kita suka, kalau disini saya membuat dengan [Semantic UI](https://react.semantic-ui.com/collections/). Kamu bisa melihat cara instalasinya langsung di dokumentasi Semantic Framework.

### **1. Setup File React**
Import React seperti biasa, dan buat function class untuk menyimpan komponen dan export agar bisa digunakan/ditransfer ke komponen lain.

> File: `src/components/products_list.js`
```javascript
+ import React, { Component } from 'react'

+ class ProductsList extends Component {
+    render() {
+        return (
+            <div>
+              Isi komponen list disini
+            </div>
+        )
+    }
+ }

+ export default ProductsList
```
### **2. Import UI Framework(Semantic)**
Ini optional, tergantung dari UI apa yang kamu pakai. Selain di import, tambah juga komponen nya didalam `<div></div>` yang kosong seperti diatas.

> File: `src/components/products_list.js`
```javascript
import React, { Component } from 'react'
+ import { List } from 'semantic-ui-react'

class ProductsList extends Component {
    render() {
        return (
            <div>
+	       <List divided relaxed>
+						<List.Item key={index}>
+                  <List.Icon name='github' size='large' verticalAlign='middle' />
+                  <List.Content>
+                    <List.Header 
+                      as='a' 
+                    >
+                      Judul/Nama Produk
+                    </List.Header>
+                    <List.Description as='a'>Deskripsi Tambahan</List.Description>
+                  </List.Content>
+                </List.Item>
+					</List>
            </div>
        )
    }
}

export default ProductsList
```

### **3. Build a Reducer**
Sekarang kita beralih ke folder `reducers`. Didalam folder ini kamu edit file yang bernama `reducer_products.js`.

Didalam file ini kamu akan memasukkan semua object data yang dibutuhkan untuk ditampilkan di UI komponen.

> File: `src/reducers/reducer_products.js`
```javascript
export default function() {
    return [
        { 
            title: "The Legend of Mana", 
            author: "Phillip Sayce",
            picture: "https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2014/06/Legend-of-Mana-Featured.jpg",
            describe: "I’ve had suicide ideation problems throughout my life. Especially as a teen. Simply wanting to die and fantasizing how. Of course teens are morose and thinking about death and dying is nothing unusual, but for me it was constant. Months on end in these wretched moods. Wrote literally two novels and a novella about suicide. Multiple short stories. Would lay in bed thinking about it, how family and friends would react. Tried my hardest to cry but couldn’t because I don’t cry easily, which would in turn make me more upset. Self-harmed. Ran out of the house after a fight with my brother, sat by the river in the forest behind my house while this impulse to smash my head in with a rock kept going on repeat in my head. Thought about how Elliott Smith stabbed himself to death as I looked at knives in the kitchen, wondering if I could do that too."
        },
        { 
            title: "Monster Hunter World", 
            author: "Ryan Kobayashi",
            picture: "http://images.pushsquare.com/news/2018/02/monster_hunter_world_official_guidebook_is_over_1000_pages_long/large.jpg",
            describe: "Music definitely helped me, uh, not do that. And not songs like “1–800–273–8255”. I don’t know if it enabled me in some way too, helped me develop some of my less admirable traits and thought patterns, but it definitely made me feel less isolated. Music may have given voice to my sadness and rage only to enable me to stew in them, but it also gave me a channel through which to process those feelings. Listening to music and feeling the strong, empathetic responses I would have to it was better than actively wanting to die."
        },
        { 
            title: "Pro Soccer Evolution", 
            author: "Konami Corp",
            picture: "http://www.dlcompare.com:8042/upload/cache/game_tetiere/upload/gameimage/file/35720.jpeg",
            describe: "Starting with the graphics, Pro Evolution Soccer 2018 offers a brand new interface, the menus have been completely redesigned, and statistics are in the game so you can keep track of your players' mistakes. But that's not all, the faces and facial and body animations of the players have been greatly improved, thanks to the Real Capture system, you can even see the emotions of players on their faces. Lighting effects have also been refreshed, as well as the animations of the crowd, to allow you a total immersion. Goalkeepers will be more realistic than ever, with more fluid and varied movements, especially when stopping and returning balls. On the gameplay side, Pro Evolution Soccer 2018 also brings novelties. Be more than ever master of your ball thanks to many improvements, such as Strategic Dribbles, which allow you to feint the opponent's defender whith finesse. In addition, Real Touch + now lets you to use all allowed body parts for ball replays and more distance with the intelligent ball control. The ball itself behaves in a more realistic and natural way, and its physics have also been improved. Penalties and free kicks have been also improved with better viewing, thanks to new camera angles and the suppression of the directional arrow for better maneuverability."
        },
        { 
            title: "Far Cry", 
            author: "Ubisoft Entertainment",
            picture: "http://www.dlcompare.com:8042/upload/cache/game_tetiere/img/far-cry-3-img-4.jpg",
            describe: "In this third installment Ubisoft offers us a return to the elements, bye bye to the desert and welcome back beautiful tropical islands! The program? Sun, beach, nature and really mad pirates that you will have to deal with! The adventure begins when Jason Brody is living it up on the holiday of his life with his friends on paradise island when has the unfortunate surprise encounter during his stay a certain Vaas, a disturbed and insane pirate."
        },
        { 
            title: "Skyrim - The Legend of Dragon", 
            author: "Bethesda",
            picture: "https://cdn.uploadvr.com/wp-content/uploads/2017/11/skyrim-dragonborn-wallpaper.jpg",
            describe: "Ever since The Elder Scrolls V: Skyrim VR was announced earlier this year back at E3 2017, hungry VR gamers around the world have been impatiently awaiting its arrival. With consumers drowning in a sea of half-finished tech demos and hour-long “experiences” that offer little depth, the arrival of a massive, sprawling adventure is long overdue. Despite the fact that it’s just a VR port of a six-year old game the tantalizing proposition of traveling to the vast, enormous land of Skyrim with the immersive power of virtual reality was just too good to be true. Could a game that massive and interactive really translate over to VR well? Could the PSVR’s Move controllers provide a good enough experience to be worth recommending?"
        }
    ]
}
```

Disini ada data: `title`, `author`, `picture` dan `describe` yang sudah dibentuk menjadi object.

### **4. Combine Reducer**
Didalam file `index.js`, kamu mengimport fungsi yang bernama `{ combineReducers }` yang kita dapatkan dari module `redux`. `{ combineReducers }` ini berguna sebagai store yang akan menggabungkan semua data object yang nanti akan bertambah banyak seiring berkembangnya aplikasi. Sehingga kamu mengambil data hanya didalam satu store yang terpercaya ini saja.

Intinya, semua file/fungsi reducer yang kamu buat, pasti akan selalu kamu masukkan kedalam `{ combineReducers }` ini. Pasti!

> **Attention**
>
> Reducer ini adalah pengganti `constructor()` atau `getInitialState()` kalau kita memakai plain React dalam membangun aplikasi. Paham kan? :)

Import data object yang di `reducer_products.js` tadi kedalam  `{ combineReducers }`.

> File: `src/reducers/index.js`
```javascript
/* Import from redux */
import { combineReducers } from 'redux'
/* Import data object */
import ProductsReducer from './reducer_products'

/* Combine Reducer in here */
const rootReducer = combineReducers({s
  /* data object dijadikan object lagi, ini akan bertambah terus seiring berkembangnya aplikasi. */
  products: ProductsReducer
})

/* Export here! */
export default rootReducer
```

### **5. Consume a Reducer**
Sekarang, mari kita implementasi data yang ada reducer tadi ke UI komponen yang ada di React. Ini akan sangat menarik, karena kamu akan melihat magic disini yang membuat kamu bertanya-tanya kenapa bisa begitu?

Buka file `src/components/products_list.js`, disini kita implementasi reducer yang telah kita buat.

Import semua hal yang dibutuhkan.
```javascript
import React, { Component } from 'react'
+ import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
```

Kita bisa lihat diatas, kita sedang mengimport `{ connect }` dari modul `react-redux`. Apa fungsi `{ connect }` ini? **`{ connect }` adalah fungsi yang akan menggabungkan komponen React yang telah dibangun dengan data yang telah kamu buat di Reducer.**

Sekarang kita lihat bagaimana kode dari  `{ connect }` ini.
```javascript
function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductsList)
``` 
Bisa kita lihat disana ada fungsi yang bernama `mapStateToProps`. Fungsi ini bisa kamu berikan nama apa saja sebenarnya, tapi, karena standar dari programmer ahli, disini saya memberikan nama `mapStateToProps`, agar next programmer yang familiar dengan redux bisa mengerti kode yang telah kita bangun.

`mapStateToProps` seperti namanya adalah fungsi yang mengembalikan data yang telah kamu buat tadi di  `src/reducers/reducer_products.js`. **Yaitu dengan membuat object `products: state.products` dan mengembalikannya dalam bentuk `props`.** Yang nanti bisa kamu panggil seperti ini `this.props.products`.

Dan `connect`, kita gunakan di dalam `export default`. Disinilah   `{ connect }` yang berasal dari modul `react-redux` ini bekerja.   `{ connect }` bertugas menggabungkan `mapStateToProps` dan komponen `ProductsList` agar bisa menampilkan UI sesuai dengan data yang ada di `reducer`.

**Terakhir**, kamu harus membuat UI lebih menarik ketika menampilkan data dari `reducer`. Disini saya menggunakan `List` yang saya dapatkan dari [Semantic UI](https://react.semantic-ui.com/collections/).
```javascript
class ProductsList extends Component {
     /* Fungsi rendeList() ini adalah membuat komponen render didalam komponen lagi. Ini berguna agar kode kamu lebih termanajemen dengan baik, sehingga kamu tau harus mengubah dimana ketika kamu ingin mengubah UI nya. */
+    renderList() {
          /* products didapat dari object didalam mapStateToProps() yang kita buat tadi */
+        return this.props.products.map((product, index) => {
+            return (
+							<List.Item key={index}>
+								<List.Icon name='github' size='large' verticalAlign='middle' />
+								<List.Content>
+									<List.Header 
+										as='a'
+									>
+										{product.title}
+									</List.Header>
+									<List.Description as='a'>{product.author}</List.Description>
+								</List.Content>
+							</List.Item>
+            )
+        })
+    }
    render() {
        return (
            <div>
              <List divided relaxed>
                <!-- Lalu panggil fungsi renderList() disini. Lalu data akan keluar dari sini. -->
+								{this.renderList()}
							</List>
            </div>
        )
    }
}
```

Oke, mari kita tampilkan semua kode yang telah kita bangun!

```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { selectBook } from '../actions'

class ProductsList extends Component {
    renderList() {
        return this.props.products.map((product, index) => {
            return (
							<List.Item key={index}>
								<List.Icon name='github' size='large' verticalAlign='middle' />
								<List.Content>
									<List.Header 
										as='a' 
									>
										{product.title}
									</List.Header>
									<List.Description as='a'>{product.author}</List.Description>
								</List.Content>
							</List.Item>
            )
        })
    }
    render() {
        return (
            <div>
							<List divided relaxed>
								{this.renderList()}
							</List>
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(ProductsList)
```

### **6. Send to Big Main Root(app.js & index.js)**

Buat seperti ini.
> File: `src/components/app.js`
```javascript
import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ProductsList from './products_list'

export default class App extends Component {
  render() {
    return (
      <div style={{ padding: 50 }}>
        <Grid>
          <Grid.Column width={4}>
            <ProductsList />
          </Grid.Column>
          <Grid.Column width={9}>
            Kosong
          </Grid.Column>
          <Grid.Column width={3}>
            Kosong
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
```
Dan..

> File: `src/index.js`
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
```

Karena `app.js` sudah cukup familiar oleh kamu, mari kita bahas sedikit saja mengenai `index.js`, karena disini ada beberapa hal yang membuat kamu agak bingung.

**Provider**
`import { Provider } from 'react-redux'`
Ini adalah fungsi yang kita dapatkan dari modul `react-redux` yang akan membantu kita untuk mengkoneksikan **root utama** dari aplikasi React ini agar terhubung dengan Redux. Ingat **root utama**!

**createStore & applyMiddleware**
`import { createStore, applyMiddleware } from 'redux'`
Adalah sebuah fungsi khusus Redux yang selalu ada di manapun kamu membangun Redux, baik menggunakan Jquery, Meteor, Angular, atau apapun itu, kamu pasti akan menemukan ini dimanapun asalkan kamu menggunakan Redux. Disini saya tidak terlalu tau fungsi nya apa, tapi kamu bisa lihat cara menggunakannya seperti contoh diatas.

### **7. Run Your App!**

Sekarang run aplikasi kamu!
```
$ npm start
```

Dan buka [localhost:3000](http://localhost:3000/). Maka kamu akan melihat keajaiban!



