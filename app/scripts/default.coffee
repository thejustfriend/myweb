s = skrollr.init(
	edgeStrategy: "set"
	easing:
		WTF: Math.random
		inverted: (p) ->
			1 - p
)

$(document).ready ->
	$('[role=navigation] > .primary > li.current_page').each ->
		currentPage = $(this).attr('page')
		$(this).parents('[role=navigation]').find('.primary-bg').find('.'+currentPage).css('display', 'block')
		
$(window).on 'scroll', ->
	$('#location').html $(window).scrollTop()

$(window).load ->
	$('.loading').delay(500).fadeOut(1000)