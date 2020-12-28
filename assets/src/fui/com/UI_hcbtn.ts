/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_hcBtn extends fgui.GComponent {

	public m_n18:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugtyh38e";

	public static createInstance():UI_hcBtn {
		return <UI_hcBtn>(fgui.UIPackage.createObject("com", "hcBtn"));
	}

	protected onConstruct():void {
		this.m_n18 = <fgui.GImage>(this.getChild("n18"));
	}
}