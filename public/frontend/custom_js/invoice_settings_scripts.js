  $(document).ready(function(){
      $('.ofcnav').removeClass('active');
      setTimeout(function(e){
        $('.ofc-invoice-settings').addClass('active');
      },500);
      var toolbarOptions = [
          ['bold', 'italic', 'underline', 'strike','blockquote',{ 'list': 'ordered'}, { 'list': 'bullet' },{ 'direction': 'rtl' },{ 'header': [1, 2, 3, 4, 5, 6, false]},{ 'color': [] },{ 'align': [] },'link','clean']        // toggled buttons
          ];

      var quill = new Quill('#invoice_text', {
        modules: {
          toolbar: toolbarOptions
        },
          theme: 'snow'
      });


      $('#invoice_header_preview').on('click',function(e){
        $('#invoice_header').trigger('click');
      });

      $('#invoice_header').on('change',function(e){
        $('#invoice_header_preview').attr('src', window.URL.createObjectURL(this.files[0]));
      });

      $('#invoice_footer_preview').on('click',function(e){
        $('#invoice_footer').trigger('click');
      });

      $('#invoice_footer').on('change',function(e){
        $('#invoice_footer_preview').attr('src', window.URL.createObjectURL(this.files[0]));
      });

      $('#btn-save-invoice-settings').on('click',function(e){
        $(this).html('<i class="fas fa-circle-notch fa-spin"></i> Adding...');
        $(this).prop('disabled',true);
        var frm = '#addForm';
        var addForm =$(frm)[0];
        var invoice_text = quill.root.innerHTML;
        var form_data = new FormData(addForm);
        form_data.append('invoice_text',invoice_text);
        $.ajax({
          url:base_url+'members/cms_save_invoice/',
          type:'POST',
          processData:false,
          contentType: false,
          data:form_data,
          context:this,
          success:function(msg)
          {
            
            var res=$.parseJSON(msg)
            if(res[0]=='success')
            {
              show_notification('success','Data Added Successfully');
              // quill.setContents([]);
            }
            else if(res[0]=='error')
            {
              show_notification('error','Unexpeced Error Try Again');
            }
            else
            {
              show_notification('warning',res[0]);  
            }
            $(this).html('<i class="fas fa-save"></i> Save');
            $(this).prop('disabled',false);
          }
        });
      });

     
  });//End of ready function