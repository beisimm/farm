/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_gmBtn1 extends fgui.GComponent {

	public m_n2:fgui.GImage;
	public m_n3:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh38r";

	public static createInstance():UI_gmBtn1 {
		return <UI_gmBtn1>(fgui.UIPackage.createObject("com", "gmBtn1"));
	}

	protected onConstruct():void {
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_n3 = <fgui.GTextField>(this.getChild("n3"));
	}
}