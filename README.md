# npm install
run app
# node app
test api
# Get RSS: 
## using postman
url: localhost:5000/rss/parRss
method: post,
body: {
    "url":"<url>"// sample: "https://vnexpress.net/rss/tin-moi-nhat.rss"
}
finally: submit

## or swagger: 
#open link on browser: http://localhost:5000/swagger/#!/rss/getRss_post_0
