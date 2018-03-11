var template =
    `<li>
        <a class="url" target="_blank">
            <div class="listContent">
                <h3 class="title"></h3>
                <div class="moreDetails">
                    <div class="details1">
                    <span class="num_points"></span>
                    <span class="author"></span>
                    </div>
                    <div class="details2">
                    <span class="id"></span> |
                    <span class="created_at"></span> | 
                    <span class="num_comments"></span> 
                    </div>
                </div>
            </div>
        </a>
    </li>`;

var option = {
    valueNames: ['id', 'title', 'author', 'num_points', 'created_at', 'num_comments',
        { data: ['id'] },
        { attr: 'href', name: 'url' },
    ],
    page: 6,
    pagination: {
        outerWindow: 1,
        innerWindow: 2,
    },
    item: template,
};

fetch("http://starlord.hackerearth.com/hackernews")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        data.splice(0, 1);
        console.log(data);
        var newsList = new List('news', option, data);
        newsList.sort('num_points', { order: "desc" });
    })