/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_xjBtn1 extends fgui.GComponent {

	public m_n12:fgui.GImage;
	public m_n13:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh38x";

	public static createInstance():UI_xjBtn1 {
		return <UI_xjBtn1>(fgui.UIPackage.createObject("com", "xjBtn1"));
	}

	protected onConstruct():void {
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_n13 = <fgui.GTextField>(this.getChild("n13"));
	}
}