function myFunction(cont)
{
	if(cont == 1)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$('#additionalStat').fadeOut('100');
		$("#namerica").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
	}
	if(cont == 2)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$("#samerica").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
		$('#additionalStat').fadeOut('100');
	}
	if(cont == 3)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$("#europe").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
		$('#additionalStat').fadeOut('100');
	}
	if(cont == 4)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$("#africa").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
		$('#additionalStat').fadeOut('100');
	}
	if(cont == 5)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$("#asia").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
		$('#additionalStat').fadeOut('100');
	}
	if(cont == 6)
	{
		$("#statisticsid").fadeOut('100');
		$("#mappic").fadeOut('100');
		$("#australia").delay('100').fadeIn('slow');
		$("#previous").delay('100').fadeIn('slow');
		$('#additionalStat').fadeOut('100');
	}
}
function back()
{
	$("#statisticsid").delay('100').fadeIn('slow');
	$("#previous").fadeOut('100');
	$("#namerica").fadeOut('100');
	$("#samerica").fadeOut('100');
	$("#europe").fadeOut('100');
	$("#africa").fadeOut('100');
	$("#asia").fadeOut('100');
	$("#australia").fadeOut('100');
	$("#mappic").delay('100').fadeIn('slow');
	$('#additionalStat').delay('100').fadeIn('slow');
}
