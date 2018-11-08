		var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
var today = dd+'-'+mm+'-'+yyyy;
	$('#datatable').DataTable({ lengthMenu: [[25, 100, -1], [25, 100, "All"]],scrollX: true, dom: 'Bflrtip', "oLanguage": {
   "sSearch": "Pencarian"
 }, buttons: [
		{
				extend: 'excelHtml5',
				text : 'Excel Semua',
			title: 'Data Penerimaan '+today,
				exportOptions: {
						columns: [ 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19 ],
				},
				customize: function( xlsx ) {
				var sheet = xlsx.xl.worksheets['sheet1.xml'];

				$('row c[r^="C"]', sheet).attr( 's', '2' );
		}
	},
						{
                extend: 'excelHtml5',
								text : 'Excel Pilihan',
              title: 'Data Penerimaan '+today,
                exportOptions: {
                    columns: [ 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19 ],
										modifier: {
                        selected: true
                    }
                },
                customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
            }
					],
					select: {
            style: 'multi'
        },
				"order": [[ 0, "asc" ]]});
						$('#datatable3').DataTable({stateSave: true, deferRender: true,scrollX: true, dom: 'Bfrtip', "oLanguage": {
   "sSearch": "Pencarian"
 }, buttons: [

											{
					                extend: 'excelHtml5',
													text : 'Excel Semua',
					              title: 'Data Pegawai '+today,
					                exportOptions: {
					                    columns: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
					                },
                customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
					},
					{
							extend: 'excelHtml5',
							text : 'Excel Pilihan',
						title: 'Data Pegawai '+today,
							exportOptions: {
									columns: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ],
									modifier: {
											selected: true
									}
							},
		customize: function( xlsx ) {
		var sheet = xlsx.xl.worksheets['sheet1.xml'];

		$('row c[r^="C"]', sheet).attr( 's', '2' );
}
					}
					            ],
											select: {
						            style: 'multi'
						        }, "order": [[ 0, "asc" ]]});
	$("#tgl").datepicker({dateFormat : 'yy-mm-dd'});
	$("#tgl1").datepicker({dateFormat : 'yy-mm-dd'});
		$("#tgl3").datepicker({dateFormat : 'yy-mm-dd'});
    $("#tgl4").datepicker({dateFormat : 'yy-mm-dd'});
	$("#tgl2").datepicker({dateFormat : 'yy-mm-dd',changeMonth: true,changeYear: true,yearRange: "1960:2010"});
	$('.subnavbar').find ('li').each (function (i) {

		var mod = i % 3;

		if (mod === 2) {
			$(this).addClass ('subnavbar-open-right');
		}

	});


$(document).on("click", ".open-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #bookId").val( myBookId );
});

$(document).on("click", ".pegawai-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #pkwtId").val( myBookId );
});
$(document).on("click", ".gagal-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #gagalId").val( myBookId );
});
$(document).on("click", ".pkwt-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     
     $(".modal-body #pkwtId2").val( myBookId );
});
$(document).on("click", ".test-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #noPendaftaran").val( myBookId );
});
$(document).on("click", ".perpanjangan-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #noDaftar").val( myBookId );
});
$(document).on("click", ".riwayat-AddBookDialog", function () {
     var myBookId = $(this).data('id');
     $(".modal-body #riwayatId").val( myBookId );
});

$(document).on("click", ".data-test", function () {
	var data = [];
    $.each($("input[name='no_pendaftaran[]']:checked"), function(i) {
      data=$(this).val();
      console.log(data);
    });
     //var myBookId = $(this).data('id');

     $(".modal-body #dataPendaftaran").val(data);
});
  $(document).on("click", ".editpegawai-AddBookDialog", function () {
       var rowid = $(this).data('id');
       $.ajax({
                  type : 'post',
                  url : 'edit_pegawai.php',
                  data :  'rowid='+ rowid,
                  success : function(data){
                  $('.pegawai-data').html(data);//menampilkan data ke dalam modal
                  }
              });
      // $(".modal-body #pkwtId").val( myBookId );
  });
$(document).on("click", ".detail-AddBookDialog", function () {
     var rowid = $(this).data('id');
		 $.ajax({
                type : 'post',
                url : 'edit_riwayat_pegawai.php',
                data :  'rowid='+ rowid,
                success : function(data){
                $('.fetched-data').html(data);//menampilkan data ke dalam modal
                }
            });
    // $(".modal-body #pkwtId").val( myBookId );
});
	$(document).on("click", ".edit-AddBookDialog", function () {
	     var rowid = $(this).data('id');
			 $.ajax({
	                type : 'post',
	                url : 'edit_test.php',
	                data :  'rowid='+ rowid,
	                success : function(data){
	                $('.fetched-data').html(data);//menampilkan data ke dalam modal
	                }
	            });
	    // $(".modal-body #pkwtId").val( myBookId );
	});
	$(document).on("click", ".photo-AddBookDialog", function () {
			 var rowid = $(this).data('id');
			 $.ajax({
									type : 'post',
									url : 'ambil_foto.php',
									data :  'rowid='+ rowid,
									success : function(data){
									$('.photo-data').html(data);//menampilkan data ke dalam modal
									}
							});
			// $(".modal-body #pkwtId").val( myBookId );
	});

	$(document).on("click", ".editriwayat-AddBookDialog", function () {
			 var rowid = $(this).data('id');
			 $.ajax({
									type : 'post',
									url : 'edit_riwayat_pekerjaan.php',
									data :  'rowid='+ rowid,
									success : function(data){
									$('.pekerjaan-data').html(data);//menampilkan data ke dalam modal
									}
							});
			// $(".modal-body #pkwtId").val( myBookId );
	});

	$('#datatable2').DataTable({bFilter: true, bInfo: false, scrollX: true,  "bLengthChange": false, "oLanguage": {
   "sSearch": "Pencarian"
 },"order": [[ 0, "DESC" ]]});
	$('#datatable4').DataTable({"oLanguage": {
   "sSearch": "Pencarian"
 },"order": [[ 0, "DESC" ]],"processing": true,
        "serverSide": true,
       /* columnDefs: [
                             {
                                 targets: [ 5],
                                 "orderable": false,
                                 render: function ( data, type, row ) {
                                     console.log("data : "+data);
                                     return data +' '+ row[7];
                                 }
                             }
                             ],*/
        "ajax": "data_surat.php"});

//datatable penerimaan
	var table = $('#datatable-penerimaan').DataTable({ deferRender:    true,scrollX: true, dom: 'Bflrtip', "oLanguage": {
   "sSearch": "Pencarian"
 }, buttons: [
		{
				extend: 'excelHtml5',
				text : 'Excel Semua',
			title: 'Data Penerimaan '+today,
				exportOptions: {
						columns: [ 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19 ],
				},
				customize: function( xlsx ) {
				var sheet = xlsx.xl.worksheets['sheet1.xml'];

				$('row c[r^="C"]', sheet).attr( 's', '2' );
		}
	},
						{
                extend: 'excelHtml5',
								text : 'Excel Pilihan',
              title: 'Data Penerimaan '+today,
                exportOptions: {
                    columns: [ 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19 ],
										modifier: {
                        selected: true
                    }
                },
                customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
            }
					],
					select: {
            style: 'multi'
        },
				"order": [[ 0, "asc" ]],
				"processing": true,
        		"serverSide": true,
        		lengthMenu: [[25, 100, -1], [25, 100, "All"]],
        		pageLength: 25,
       columnDefs: [
                             {
                                 targets: [9],
                                 "orderable": false,
                                 render: function ( data, type, row ) {
                                    
                                     return data +' RT:'+ row['alamat_rt']+'/'+row['alamat_rw']+' '+row['alamat_kec']+' '+row['alamat_kota'];
                                 }
                             },
                             {
                                 targets: [1],
            					'checkboxes': {
               					'selectRow': true
            						}
                             }
                             ],
        "ajax": "data_penerimaan.php"
			});

	// datatables pegawar ssp
	$('#datatable-pegawai').DataTable({stateSave: true, deferRender: true,scrollX: true, dom: 'Bfrtip', "oLanguage": {
   "sSearch": "Pencarian"
 }, buttons: [

											{
					                extend: 'excelHtml5',
													text : 'Excel Semua',
					              title: 'Data Pegawai '+today,
					                exportOptions: {
					                    columns: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
					                },
                customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];

                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
					},
					{
							extend: 'excelHtml5',
							text : 'Excel Pilihan',
						title: 'Data Pegawai '+today,
							exportOptions: {
									columns: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ],
									modifier: {
											selected: true
									}
							},
		customize: function( xlsx ) {
		var sheet = xlsx.xl.worksheets['sheet1.xml'];

		$('row c[r^="C"]', sheet).attr( 's', '2' );
}
					}
					            ],
											select: {
						            style: 'multi'
						        }, "order": [[ 0, "asc" ]],
				"processing": true,
        		"serverSide": true,
       columnDefs: [
                             {
                                 targets: [6],
                                 "orderable": false,
                                 render: function ( data, type, row ) {
                                    
                                     return data +' RT:'+ row['alamat_rt']+'/'+row['alamat_rw']+' '+row['alamat_kec']+' '+row['alamat_kota'];
                                 }
                             },
                             {
                                 targets: [0],
                                 render: function ( data, type, row ) {
                                    
                                     return data +' '+ row['lihat'];
                                 }
                             }
                             ],
        "ajax": "data_pegawai.php"});

	$(document).on("click", ".data-test", function(){
      var form = this;
      
      var rows_selected = table.column(1).checkboxes.selected();

      // Iterate over all selected checkboxes
      $.each(rows_selected, function(index, rowId){
         // Create a hidden element 
         $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'id_pendaftaran[]')
                .val(rowId)
         );
      });

      // FOR DEMONSTRATION ONLY
      // The code below is not needed in production
      
      // Output form data to a console     
      $('.modal-body #ajaxPendaftaran').val(rows_selected.join(","));
      
      // Output form data to a console     
     // $('#example-console-form').text($(form).serialize());
       
      // Remove added elements
      $('input[name="id\[\]"]', form).remove();
       
   });

   $(document).on("click", ".data-perpanjang", function(){
      var form = this;
      
      var rows_selected = table.column(1).checkboxes.selected();

      // Iterate over all selected checkboxes
      $.each(rows_selected, function(index, rowId){
         // Create a hidden element 
         $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'id_pendaftaran[]')
                .val(rowId)
         );
      });

      // FOR DEMONSTRATION ONLY
      // The code below is not needed in production
      
      // Output form data to a console     
      $('.modal-body #noPerpanjang').val(rows_selected.join(","));
      
      // Output form data to a console     
     // $('#example-console-form').text($(form).serialize());
       
      // Remove added elements
      $('input[name="id\[\]"]', form).remove();
       
   });   
