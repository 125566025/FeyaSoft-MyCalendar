/**
 * FeyaSoft MyCalendar
 * Copyright(c) 2006-2011, FeyaSoft Inc. All right reserved.
 * info@feyasoft.com
 * http://www.feyasoft.com
 *
 * Please read license first before your use myCalendar, For more detail
 * information, please can visit our link: http://www.cubedrive.com/myCalendar
 *
 * You need buy one of the Feyasoft's License if you want to use MyCalendar in
 * your commercial product. You must not remove, obscure or interfere with any
 * FeyaSoft copyright, acknowledgment, attribution, trademark, warning or
 * disclaimer statement affixed to, incorporated in or otherwise applied in
 * connection with the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Ext.ns('Ext.util');

Ext.util.LabelField = Ext.extend(Ext.form.field.Base, {

    onRender:function(ct, position){
		Ext.util.LabelField.superclass.onRender.call(this, ct, position);
		this.wrap = this.el.wrap({cls: this.wrapClass});
		if(Ext.isIE) this.wrap.setHeight(20);
		this.labelEl=this.wrap.down('div[class*=x-form-item-body]');
	},

    setText:function(v){
        if(this.labelEl){
            this.labelEl.dom.innerHTML = v;
        }else{
            this.text = v;
        }
    },

    getText:function(){
        return this.labelEl.dom.innerHTML;
    },
    fieldSubTpl: ['']
        
    
});
