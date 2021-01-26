/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_LevelTiem extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public m_label:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugpkkdix";

	public static createInstance():UI_LevelTiem {
		return <UI_LevelTiem>(fgui.UIPackage.createObject("com", "LevelTiem"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_label = <fgui.GTextField>(this.getChild("label"));
	}
}