// Inject style

	var css = `<style type="text/css">
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

	// Inject get started
	var elToTargetGetStarted = document.querySelectorAll('section[data-type="frequently_read"]')[0];
	var getStarted = `
	<div class="sb-get-started">
		<header>
			<h4>Get Started</h4>
			<p>Are you setting up your drop-shipping or print-on-demand store for the first time? Here's all the information you'll need.</p>
		</header>
		<div class="sb-get-started-content">
			<div class="sb-get-started-item">
				<h4>ShopBase</h4>
				<p>
				  ShopBase is the cross-border eCommerce platform specialized for Dropshipping, 
				  Print on Demand, and White Label businesses. This checklist outlines all the 
				  necessary steps that you need to take to get your store ready & start selling 
				  in the quickest way possible with ShopBase
				</p>
				<a href="#" class="sb-get-started-item-btn">
					Get Started With ShopBase
				</a>
			</div>

			<div class="sb-get-started-item">
				<h4>PrintBase</h4>
				<p>
				  PrintBase is an all-in-one platform specialized in print on demand services: 
				  from helping merchants to create online stores, fulfilling products, to providing 
				  the payment gateway and customer service. This checklist outlines all the necessary 
				  steps that you need to take to get your store ready & start selling in the quickest 
				  way possible with ShopBase
				</p>
				<a href="#" class="sb-get-started-item-btn">
					Get Started With PrintBase
				</a>
			</div>

			<div class="sb-get-started-item">
				<h4>Community</h4>
				<p>
				  Looking for ShopBase product how-tos, peer support, community discussion and thought 
				  leadership on eCommerce best practices? Here's where you should go!
				</p>
				<a href="#" class="sb-get-started-item-btn btn-outline">
					Join Vietnam Community
				</a>
				<a href="#" class="sb-get-started-item-btn">
					Join Our International Community
				</a>
			</div>


			<div class="sb-get-started-item">
				<h4>Request sales support</h4>
				<p>
				  Wanna have 1-on-1 support in setting up your new ShopBase or PrintBase store? Let us know!
				</p>
				<a href="#" class="sb-get-started-item-btn">
					Request a sales call
				</a>
			</div>

		</div>
	</div>
	`;

	elToTargetGetStarted.insertAdjacentHTML('beforebegin', getStarted);
