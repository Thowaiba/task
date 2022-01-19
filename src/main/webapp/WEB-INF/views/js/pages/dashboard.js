//[Dashboard Javascript]

//Project:	CrmX Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {


   
      
    

  'use strict';
	
	var options = {
        series: [{
            name: "Online",
            data: [0, 40, 110, 70, 100, 60, 130, 55, 140, 125]
			}, {
			  name: 'In Store',
			  data: [0, 71, 20, 120, 50, 98, 70, 95, 66, 90]
		  }],
        chart: {
			foreColor:"#333333",
          height: 280,
          type: 'area',
          zoom: {
            enabled: false
          }
        },
		colors:['#FDAC41', '#FF5B5C'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          	show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 3,
			dashArray: 0, 
        },
		 legend: {
		  show: true,
		  position: 'top',
		  horizontalAlign: 'left',
		 },
        grid: {
			borderColor: '#f7f7f7', 
          row: {
            colors: ['transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },			
		  yaxis: {
			lines: {
			  show: true,
			},
		  },
        },
		fill: {
			type: "gradient",
			gradient: {
			  shadeIntensity: 1,
			  opacityFrom: 0.01,
			  opacityTo: 1,
			  stops: [0, 90, 100]
			}
		  },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		  labels: {
			show: true,        
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
          tooltip: {
            enabled: true,        
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val + "K";
            }
          }
        
        },
      };
      var chart = new ApexCharts(document.querySelector("#charts_widget_2_chart"), options);
      chart.render();
	           

	   var result = [ '${CAILBERCHART_18}', '${CAILBERCHART_21}' , '${CAILBERCHART_24}' ,'${CAILBERCHART_14}','${CAILBERCHART_22}']
	           
	             
	 var options = {
	      
          series: [ parseFloat(result[0]), parseFloat(result[1]) , parseFloat(result[2]) , parseFloat(result[3]) , parseFloat(result[4]) ],
          chart: {
          width: '100%',
			  height: 275,
          type: 'donut',
        },
		 labels: [ 'cailber 18', 'cailber 21','cailber 24' ,'cailber 14' ,'cailber 22' ],
        dataLabels: {
          enabled: false
        },
		  plotOptions: {
			pie: {
			  donut: {
				size: '90%'
			  }
			}
		  },
		 colors:['#e1306c', '#c23321','#3b5998','#11844a','#009faa'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
			 show: false,
        }
        };

        var chart = new ApexCharts(document.querySelector("#charts_widget_2"), options);
        chart.render();
        
      //---------------------------------------------------------------------------------------------------------------- الاول على اليمين
      
        var result3 = [ '${MIN_TOTAL_WEIGHT_WITHOUT_PERCENTAGE}', '${MAX_TOTAL_WEIGHT_WITHOUT_PERCENTAGE}' ]
	           
	             
	 var options = {
	      
          series: [ parseFloat(result3[0]), parseFloat(result3[1]) ],
          chart: {
          width: '100%',
			  height: 275,
          type: 'donut',
        },
		 labels: [ '${MIN_ORG_NAME}', '${MAX_ORG_NAME}'],
        dataLabels: {
          enabled: false
        },
		  plotOptions: {
			pie: {
			  donut: {
				size: '90%'
			  }
			}
		  },
		 colors:['#e1306c', '#c23321'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
			 show: false,
        }
        };

        var chart = new ApexCharts(document.querySelector("#charts_widget_3"), options);
        chart.render();
      
       //----------------------------------------------------------------------------------------------------------------   الى فى النص
      
       var result2 = [ '${INVOICE_NUMBER_WITHOUT_PERCENTAGE0}', '${INVOICE_NUMBER_WITHOUT_PERCENTAGE1}' ]
	           
	             
	 var options = {
	      
          series: [ parseInt(result2[0]), parseInt(result2[1])],
          chart: {
          width: '100%',
			  height: 275,
          type: 'donut',
        },
		 labels: [ '${ORG_NAME0}', '${ORG_NAME1}'],
        dataLabels: {
          enabled: false
        },
		  plotOptions: {
			pie: {
			  donut: {
				size: '90%'
			  }
			}
		  },
		 colors:['#e1306c', '#c23321'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
			 show: false,
        }
        };

        var chart = new ApexCharts(document.querySelector("#charts_widget_4"), options);
        chart.render();
      
      
    
      
      
      
	
	
	
	window.Apex = {
		stroke: {
		  width: 2
		},
		markers: {
		  size: 0
		},
		tooltip: {
		  fixed: {
			enabled: true,
		  }
		}
    };
	var options1 = {
          series: [{
          data: [25, 66, 41, 89, 63, 36, 9, 54]
        }],
          chart: {
          type: 'line',
          width: 150,
          height: 50,
          sparkline: {
            enabled: true
          }
        },
		colors: ['#39DA8A'],
		stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
        };

        var chart1 = new ApexCharts(document.querySelector("#chart-1"), options1);
        chart1.render();
	
	
	
	var options1 = {
          series: [{
          data: [25, 55, 41, 89, 50, 25, 44, 12]
        }],
          chart: {
          type: 'line',
          width: 150,
          height: 50,
          sparkline: {
            enabled: true
          }
        },
		colors: ['#FF5B5C'],
		stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
        };

        var chart1 = new ApexCharts(document.querySelector("#chart-2"), options1);
        chart1.render();
	
	
	var options1 = {
          series: [{
          data: [50, 25, 44, 12, 25, 55, 41, 89]
        }],
          chart: {
          type: 'line',
          width: 150,
          height: 50,
          sparkline: {
            enabled: true
          }
        },
		colors: ['#39DA8A'],
		stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
        };

        var chart1 = new ApexCharts(document.querySelector("#chart-3"), options1);
        chart1.render();
	
	
	
	var options1 = {
          series: [{
          data: [25, 55, 44, 12, 41, 89, 50, 25]
        }],
          chart: {
          type: 'line',
          width: 150,
          height: 50,
          sparkline: {
            enabled: true
          }
        },
		colors: ['#FF5B5C'],
		stroke: {
          curve: 'smooth'
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
        };

        var chart1 = new ApexCharts(document.querySelector("#chart-4"), options1);
        chart1.render();
		 
      
	
}); // End of use strict
