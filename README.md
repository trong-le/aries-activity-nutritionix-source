#Aries Integration for Nutritionix

This is an integration for [Nutritionix](http://www.nutritionix.com/).

##Methods
This integration has four methods:

###1) Get Search Endpoint Data
Returns the data from the Search API endpoint.

###2) Get Item Endpoint Data
Returns the data from the Item API endpoint.

###1) Get Brand Only Endpoint Data
Returns the data from the Brand, NOT Brand/Search, API endpoint.

###1) Get Brand Search Endpoint Data
Returns the data from the Brand/Search API endpoint.


##Configuration

###Method
The method specifies the unique method to use to get a certain data endpoint.
```javascript
"method": "getSearchEndpointData"
```

###App Id
The App Id is the application id associated with your developer account from Nutrionix.
```javascript
"appId": "382tl909"
```

###App Key
The App Key is the application key associated with your developer account from Nutrionix.
```javascript
"appKey": "82s99ida823s234apl98iid92831a64d"
```

###Data Endpoint
The data endpoint corresponds to the specified data endpoint. 
```javascript
"dataEndpoint": "item"
```

###Phrase
The phrase is the phrase or terms you would like to search by. This field can be left blank.
```javascript
"phrase": "USDA"
```

###Brand Id
The brand id filters your results by a specific brand by passing in a brand_id. You can now leave the phrase field blank to return all results from a brand.
```javascript
"brand_id": "55918cab54929366608f7483"
```

###Results
The results field specifies a range of results to view a section of up to 50 items in the "hits" array. This field can be left blank.
```javascript
"results": "0:20"
```

###Cal Min
The cal min field is the minimum number of calories you want to be in an item returned in the results. This field can be left blank.
```javascript
"cal_min": "0"
```

###Cal Max
The cal max field is the maximum number of calories you want to be in an item returned in the results. This field can be left blank.
```javascript
"cal_max": "5000"
```

###Fields
Fields is the fields from an item you would like to return in the results. Supports all item properties in comma delimited format. NOTE-- passing "*" as a value will return all item fields.
```javascript
"fields": [
    "item_name",
    "brand_name",
    "item_id",
    "brand_id"
]
```

###Id
The id field is the id of the item to retrieve. The field is required for both the 'item' and 'brand' endpoints.
```javascript
"id": "55d229ea8c1150521745888e"
```

###UPC
The UPC field is the UPC, Universal Product Code, of the item to retrieve. The field is required for both the 'item' and 'brand' endpoints.
```javascript
"upc": "01234567890"
```

###Query
The query field is the phrase you want to search by. This field can be left blank.
```javascript
"query": "just salad"
```

###Auto
The auto field is a boolean opperator that tells us to use an autocomplete style query for fast prefixing. This field can be left blank.
```javascript
"auto": "true"
```

###Type
The auto field is a boolean opperator that tells us to use an autocomplete style query for fast prefixing. This field can be left blank.
```javascript
"type": "1"
```

###Min Score
Sometimes you may see too few results, this is because a results score might be lower than min_score. Adjust this to view more results. This field can be left blank.
```javascript
"min_score": "1"
```

###Offset
The offset of paging through a result set. limit must be present with offset. This field can be left blank UNLESS limit is present.
```javascript
"offset": "250"
```

###Limit
The limit of the results to be returned. Minimum of 1, max of 50. Offset must be present with limit.
```javascript
"limit": "20"
```

##Response
This is an example response when a query is made using:
    dataEndpoint: 'search',
    phrase: 'USDA',
    results: '0:5',
    cal_min: 0,
    cal_max: 50,
    fields: [
        'item_name',
        'brand_name',
        'item_id',
        'brand_id'
    ],
    appId: process.env.APP_ID,
    appKey: process.env.APP_KEY

 The request will look like this: "https://api.nutritionix.com/v1_1/search/USDA?results=0%3A5&cal_min=0&cal_max=50&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=APP_ID&appKey=APP_KEY" with the response below.
```javascript
{
  "total_hits": 3148,
  "max_score": 1.6091676,
  "hits": [
    {
      "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
      "_type": "item",
      "_id": "ddee7146bd647932a0e19002",
      "_score": 1.6091676,
      "fields": {
        "item_id": "ddee7146bd647932a0e19002",
        "item_name": "USDA Commodity, salsa - 100 g",
        "brand_id": "513fcc648110a4cafb90ca5e",
        "brand_name": "USDA",
        "nf_serving_size_qty": 1,
        "nf_serving_size_unit": "serving"
      }
    },
    {
      "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
      "_type": "item",
      "_id": "513fceb375b8dbbc210001d4",
      "_score": 1.5541956,
      "fields": {
        "item_id": "513fceb375b8dbbc210001d4",
        "item_name": "Egg Mix, USDA Commodity - 1 tbsp",
        "brand_id": "513fcc648110a4cafb90ca5e",
        "brand_name": "USDA",
        "nf_serving_size_qty": 1,
        "nf_serving_size_unit": "serving"
      }
    },
    {
      "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
      "_type": "item",
      "_id": "ddee71464f711e0de8fda213",
      "_score": 1.4313303,
      "fields": {
        "item_id": "ddee71464f711e0de8fda213",
        "item_name": "USDA Commodity, spaghetti sauce, meatless, canned - 100 g",
        "brand_id": "513fcc648110a4cafb90ca5e",
        "brand_name": "USDA",
        "nf_serving_size_qty": 1,
        "nf_serving_size_unit": "serving"
      }
    },
    {
      "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
      "_type": "item",
      "_id": "513fceb475b8dbbc21000724",
      "_score": 1.4313303,
      "fields": {
        "item_id": "513fceb475b8dbbc21000724",
        "item_name": "USDA Commodity Food, oil, vegetable, soybean, refined - 1 teaspoon",
        "brand_id": "513fcc648110a4cafb90ca5e",
        "brand_name": "USDA",
        "nf_serving_size_qty": 1,
        "nf_serving_size_unit": "serving"
      }
    },
    {
      "_index": "f762ef22-e660-434f-9071-a10ea6691c27",
      "_type": "item",
      "_id": "513fceb475b8dbbc2100096f",
      "_score": 1.4313303,
      "fields": {
        "item_id": "513fceb475b8dbbc2100096f",
        "item_name": "USDA Commodity, turkey ham, dark meat, smoked, frozen - 1 oz",
        "brand_id": "513fcc648110a4cafb90ca5e",
        "brand_name": "USDA",
        "nf_serving_size_qty": 1,
        "nf_serving_size_unit": "serving"
      }
    }
  ]
}
```