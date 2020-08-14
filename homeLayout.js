setTimeout(function() {
		// Inject style

	var css = `<style type="text/css">
		.csh-home section .csh-home-list li a .csh-home-list-image {
			background-size: 64px auto;
		}
		.csh-home section .csh-home-list {
			text-align: left;
		}
		.csh-home section .csh-home-list li {
			text-align: center;
		}
		.csh-home section .csh-home-list .sb-custom-cat-header {
			text-align: center;
		}
		.csh-wrapper {
			width: 1024px;
			max-width: 1024px;
		}
		.csh-header-main {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.sb-heading-menu-link {
			min-width: 50%;
		}
		.sb-heading-menu-link ul {
			text-align: center;
		}
		.sb-heading-menu-link ul li {
			display: inline-block;
			padding: 0 8px;
		}
		.sb-heading-menu-link ul li a {
			color: #fff;
			transition: .2s;
			font-size: 13px;
		}
		.sb-heading-menu-link ul li a:hover {
			opacity: .7;
		}

		.sb-hero-bg {
			text-align: center;
    		margin-bottom: 44px;
    		background: linear-gradient(125deg, #0093ED -10%, #003a5e 100%);
    		padding: 30px 16px;
    		color: #fff;
		}

		.sb-hero-bg h4 {
			font-size: 23px;
    		margin-bottom: 16px;
		}

		.sb-get-started {
			margin-bottom: 44px;
		}

		.sb-get-started header::after {
			display: none;
		}

		.sb-get-started header {
			padding-top: 0;
    		text-align: center;
		}

		.sb-get-started header h4 {
			font-size: 23px;
    		margin-bottom: 16px;
		}

		.sb-get-started header p {
			max-width: 500px;
    		margin: 0 auto;
    		line-height: 21px;
		}

		.sb-get-started .sb-get-started-content {
			display: flex;
			justify-content: space-between;
		}

		.sb-get-started .sb-get-started-content .sb-get-started-item {
			width: 25%;
			text-align: center;
			padding: 16px;
    		margin: 0 8px;
    		border: 1px solid rgba(188,198,208,.7);
		}

		.sb-get-started .sb-get-started-content .sb-get-started-item h4 {
			font-size: 21px;
			margin-bottom: 16px;
		}

		.sb-get-started .sb-get-started-content .sb-get-started-item p {
			text-align: left;
			font-size: 14px;
		}

		.sb-get-started .sb-get-started-content .sb-get-started-item .sb-get-started-item-btn {
    		margin-top: 16px;
    		display: block;
    		font-size: 13px;
    		background: linear-gradient(125deg, #0093ED -10%, #003a5e 100%);
    		height: 32px;
    		line-height: 32px;
    		color: #fff;
    		border-radius: 3px;
		}

		.sb-get-started .sb-get-started-content .sb-get-started-item .sb-get-started-item-btn.btn-outline {
			background: transparent;
    		color: #000;
    		border: 1px solid rgba(188,198,208,.7);
		}

		.sb-custom-cat-header {
			margin-bottom: 32px;
    		margin-top: 44px;
    		padding-top: 60px;
    		position: relative;
		}

		.sb-custom-cat-header::after {
			content: "";
    		width: 50%;
    		height: 1px;
    		background: #ddd;
    		position: absolute;
    		top: 0;
    		z-index: 999;
    		transform: translate(-50%, 0);
		}

		.sb-custom-cat-header h4 {
			font-size: 23px;
    		margin-bottom: 16px;
		}

		.sb-custom-cat-header p {
			font-size: 16px;
		    max-width: 600px;
		    margin: 0 auto;
		    line-height: 24px;
		}

	</style>`;
    document.querySelectorAll('head')[0].insertAdjacentHTML('beforeend', css);

	// Inject menu header
	
	var elToTargetMenu = document.querySelectorAll('.csh-header-main-actions')[0];

	var listMenu = `<div class='sb-heading-menu-link'>
		<ul>
		  <li><a href="https://help.shopbase.com/en/article/shopbase-goals-1xlxc9c/" target="_blank">About ShopBase</li>
		  <li><a href="https://help.shopbase.com/en/article/how-to-build-a-dropshipping-website-with-shopbase-wn8kyb/" target="_blank">Sell with ShopBase</li>
		  <li><a href="https://help.shopbase.com/en/article/how-to-build-a-print-on-demand-website-with-printbase-1tlz8fu/" target="_blank">Sell with PrintBase</li>
		  <li><a href="#" target="_blank">Optimize store</li>
		  <li><a href="#" target="_blank">Join us</li>
		</ul>
	</div>`;
	elToTargetMenu.insertAdjacentHTML('beforebegin', listMenu);

	// Inject hero bg
	var elToTargetHeroBg = document.querySelectorAll('.csh-home')[0];

	var heroBg = `<div class="sb-hero-bg">
		<h4>Knowledge Base</h4>
		<p>Explore How-To's and learn eCommerce best practices from our knowledge base.</p>
	</div>`;

	elToTargetHeroBg.insertAdjacentHTML('beforebegin', heroBg);

	// Inject slice list categories
	var listCategoriesData = [
	  {
	  	title: `Get Started`,
	  	description: `Are you setting up your drop-shipping or print-on-demand store for the first time? Here's all the information you'll need.`,
	  	catIndex: [0,1,2,3,4],
	  },	
	  {
	  	title: `Customize your storefront`,
	  	description: `You had a fully functional store created already, it’s time to make your store look greater & have a sense of your brand in it. Let’s learn how to customize your ShopBase / PrintBase storefront on your preference.`,
	  	catIndex: [5,6,7,8],
	  },
	  {
	  	title: `Manage your store`,
	  	description: `Organize and manage everything behind, from your domains, payments,  products, orders  and fulfillment process`,
	  	catIndex: [9,10,11,12,13],
	  },
	  {
	  	title: `Promote your store`,
	  	description: `Organize and manage everything behind, from your domains, payments,  products, orders  and fulfillment process`,
	  	catIndex: [14,15,16,17],
	  },
	  {
	  	title: `Increase your store's conversion rate`,
	  	description: `Converting your website visitors into loyal customers who pay (multiple times) for your products is what you want to do next. Let’s discover how to boost your store's conversion rate.`,
	  	catIndex: [18,19],
	  },
	  {
	  	title: `Join Our Programs`,
	  	description: `Don’t hesitate to take part in our programs and let us build a thriving eCommerce community together`,
	  	catIndex: [20,21,22],
	  },
	  {
	  	title: '',
	  	description: '',
	  	catIndex: [23],
	  },
	  
	];
	document.querySelectorAll('.csh-home .csh-home-list-large li').length
	listCategoriesData.map(function(item) {
	  var index = item.catIndex[0];
	  document.querySelectorAll('.csh-home .csh-home-list-large li')[index].insertAdjacentHTML("beforebegin", `<div class="sb-custom-cat-header"><h4>${item.title}</h4><p>${item.description}</p></div>`);
	});
}, 100);
