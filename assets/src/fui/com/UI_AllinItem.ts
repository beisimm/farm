/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_AllinItem extends fgui.GComponent {

	public m_n11:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_pic:fgui.GLoader;
	public static URL:string = "ui://cu1uq9ugqgkvgq";

	public static createInstance():UI_AllinItem {
		return <UI_AllinItem>(fgui.UIPackage.createObject("com", "AllinItem"));
	}

	protected onConstruct():void {
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
	}
}