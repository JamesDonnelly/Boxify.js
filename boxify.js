$.fn.extend({
	boxify: function(args) {
		var $this = $(this),
			$boxes = $this.children('figure'),

			args = args || {},
			arg_background = args.background || '#fff',
			arg_bordercolor = args['border-color'] || '#bbb',
			arg_color = args.color || '#000',
			arg_margin = args.margin && +args.margin.replace(/px$/, '') || 6,
			arg_padding = args.padding && +args.padding.replace(/px$/, '') || 10,
			arg_width = args.width && +args.width.replace(/px$/, '') || 220,

			cont_width = $this.innerWidth(),
			cont_space = (cont_width % (arg_width + arg_margin)),
			cont_boxes = (cont_width - cont_space) / (arg_width + arg_margin),

			positions = [];

		$this.css({
			margin: arg_margin / 2 + 'px ' + cont_space / 2 + 'px',
			position: 'relative'
		});

		$boxes.each(function(i, box) {
			var $box = $(box);

			$box.css({
				background: $box.data('background') || arg_background,
				color: $box.data('color') || arg_color,
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: $box.data('border-color') || arg_bordercolor,
				boxSizing: 'border-box',
				margin: arg_margin / 2,
				padding: arg_padding,
				position: 'absolute',
					top: i >= cont_boxes ? positions[i-cont_boxes] : 0,
					left: (arg_width + arg_margin) * Math.round(i % cont_boxes),
				width: arg_width
			});

			$box.find('img').width(arg_width - (arg_padding * 2) - 2);
			positions.push($box.outerHeight() + arg_margin + $box.position().top);
		});
	}
});